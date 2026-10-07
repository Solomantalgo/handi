const fs=require('fs'),vm=require('vm');
const md=fs.readFileSync('haandi-digital-menu.md','utf8').replace(/\r/g,'');
const ctx={};vm.runInNewContext(fs.readFileSync('data.js','utf8')+';globalThis.oldFood=FOOD;',ctx);
const old=ctx.oldFood;
const slug=s=>s.toLowerCase().normalize('NFKD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
const aliases={
 'Manchow Chicken Soup':'Chicken Manchow Soup','Hot and Sour Chicken Soup':'Chicken Hot & Sour Soup',
 'Hot and Sour Soup Veg':'Hot & Sour Soup','Veg Manchow Soup':'Vegetable Manchow Soup',
 'Paneer Tikka Tandoori':'Paneer Tikka','Chilly Chicken Dry':'Chilli Chicken',
 'Crispy Fried Chilly Garlic':'Crispy Fried Garlic Chips (Spicy)',
 'Chilly Paneer Chinese Style':'Chinese-Style Paneer','Chilly Corn':'Crispy Fried Chilli Corn',
 'Chilly Prawns':'Chilli Prawns','Chicken Tikka Dry Tandoori':'Chicken Tikka',
 'Chicken Angara Spicy':'Chicken Angara','Tandoori Fish Tikka':'Fish Tikka',
 'Veg Manchurian Dry':'Vegetable Manchurian (Dry)','Masala Papad Roasted':'Masala Papad (Roasted)',
 'Plain Papad Roasted':'Plain Papad (Roasted)','Kadhai Chicken':'Kadhai Chicken',
 'Crispy Ftried Fish Fillet':'Crispy Fried Fish','Amsitsari Fish Fry':'Amritsari Fish Fry',
 'Kajju Curry':'Kaju Curry','Pudhina Prantha':'Pudina Paratha',
 'Tandoori Alo Nzakat':'Tandoori Aloo Nazakat','Chicken Drums of Heaven':'Chicken Drumsticks',
 'Chef Special Chicken Mint':'Chicken Mint Bura',
 'Paneer Tikka Tandoori':'Tandoori Paneer Tikka','Chilly Paneer Chinese Style':'Chilli Paneer',
 'Paneer Salt and Pepper':'Paneer Salt & Pepper','Mushroom Salt and Pepper':'Mushroom Salt & Pepper',
 'Chilly Fish Dry':'Chilli Fish (Dry)','Veg Platter':'Vegetable Platter',
 'Crispy Fried Fish Fillet':'Crispy Fried Fish','Achari Chicken Tikka':'Chicken Achari Tikka',
 'Onion Masala Pulao':'Onion Pulao',
 'Crispy Fried Chilly Garlic Chips ( Spicy )':'Crispy Fried Garlic Chips (Spicy)',
 'Crispy Fried Chilly Garlic Chips ( Mild )':'Crispy Fried Garlic Chips (Mild)',
 'Masala Papad Roasted':'Masala Papad (Roasted)','Plain Papad Roasted':'Plain Papad (Roasted)',
 'Honey Chili Potato':'Honey Chilli Potato','Keema Mutton':'Mutton Keema','Mutton Pepper Fry':'Mutton Pepper Fry (Dry)',
 'Chef Special Chicken Mint Bura':'Chicken Mint Bura','Paneer Mint Burra':'Paneer Mint Burra'
};
const rules=[
 [/non.?veg.*starter|sizzling non/i,'non-vegetarian-starters'],[/non.?veg main/i,'non-vegetarian-mains'],[/veg main/i,'vegetarian-mains'],
 [/soup|broth/i,'soups'],[/salad|raita/i,'salads'],[/appetizer|side|papad|chips/i,'sides'],[/chaat/i,'chaat'],
 [/new edition/i,'new-edition'],[/veg.*starter|soya chaap|hara bhara kebab|veggie temptations/i,'vegetarian-starters'],[/combo/i,'combos'],
 [/chinese/i,'indo-chinese'],[/rice|biryani/i,'rice-biryani'],[/bread|naan|roti|paratha/i,'breads'],[/dessert|sweet/i,'desserts']
];
const moneyRx=/((?:Half|Full|Boneless|With bone|Bone|With Butter|Plain|1 Scoop|3 Scoop|Mixed)?\s*[-:]?\s*)(\d{1,3}(?:,\d{3})+)/gi;
const pageCategories={
 'kampala-road':{2:['soups','salads'],3:['sides','sides'],4:['new-edition','new-edition'],5:['chaat','vegetarian-starters'],6:['vegetarian-starters','non-vegetarian-starters'],7:['non-vegetarian-starters','non-vegetarian-starters'],8:['non-vegetarian-starters','non-vegetarian-starters'],9:['vegetarian-mains','vegetarian-mains'],10:['vegetarian-mains','vegetarian-mains'],11:['indo-chinese','non-vegetarian-mains'],12:['non-vegetarian-mains','non-vegetarian-mains'],13:['rice-biryani','rice-biryani'],14:['breads','breads'],15:['breads','desserts']},
 naguru:{2:['soups','salads'],3:['sides','sides'],4:['chaat','vegetarian-starters'],5:['vegetarian-starters','vegetarian-starters'],6:['vegetarian-starters','non-vegetarian-starters'],7:['non-vegetarian-starters','non-vegetarian-starters'],8:['non-vegetarian-starters','non-vegetarian-starters'],9:['non-vegetarian-starters','vegetarian-mains'],10:['vegetarian-mains','vegetarian-mains'],11:['indo-chinese','non-vegetarian-mains'],12:['non-vegetarian-mains','non-vegetarian-mains'],13:['non-vegetarian-mains','non-vegetarian-mains'],14:['non-vegetarian-mains','non-vegetarian-mains'],15:['rice-biryani','breads'],16:['breads','breads'],17:['desserts','desserts']}
};
const isPriceLine=s=>/^(?:(?:Half|Full|Boneless|With bone|Bone|With Butter|Plain|1 Scoop|3 Scoop|Mixed)\s*)?[-:]?\s*\d{1,3}(?:,\d{3})*(?:\s*\/?=?\s*)$/i.test(s.trim());
function section(branch,start,end){const text=md.slice(md.indexOf(start),md.indexOf(end));let rows=[],cat='restaurant-food';
 for(const page of text.split(/(?=### .*source page \d+)/i)){cat='restaurant-food';
  const pageNo=+(page.match(/source page (\d+)/i)?.[1]||0);
  for(const col of page.split(/(?=#### Column \d)/i)){
   const column=col.match(/#### Column (\d)/i)?.[1]||'1';let pending=null;cat=pageCategories[branch]?.[pageNo]?.[+column-1]||'restaurant-food';
   const flush=()=>{if(pending?.variants.length)rows.push(pending);pending=null};
   for(const block of col.split(/\n\s*\n/)){
    const lines=block.split('\n').map(s=>s.trim()).filter(s=>s&&!/^#### Column \d/i.test(s));if(!lines.length)continue;
    let first=lines[0].replace(/^#+\s*/,'').replace(/^[yYr,]+\s+(?=[A-Z])/,'').trim();
    if(/^#### Column|^### .*source page|^Source:/i.test(lines[0]))continue;
    const cue=rules.find(([rx])=>rx.test(first));moneyRx.lastIndex=0;const hasPrice=moneyRx.test(block);moneyRx.lastIndex=0;
    const pricingOnly=lines.every(isPriceLine);
    if(!hasPrice||pricingOnly){
     if(!hasPrice&&lines.length<=2&&(cue||first===first.toUpperCase()||/delights|temptations|broths|bowl/i.test(first))){flush();if(cue)cat=cue[1];continue}
     if(pricingOnly){if(pending){moneyRx.lastIndex=0;for(const m of block.matchAll(moneyRx))pending.variants.push({label:m[1].trim().replace(/[-:]$/,'').trim()||'Standard',price:+m[2].replace(/,/g,'')});continue}
      const prev=rows.at(-1);if(prev&&prev.branch===branch&&prev.page===pageNo&&prev.column===column&&/^(?:Half|Full|Boneless|With bone|Bone|With Butter|Plain)/i.test(first)){moneyRx.lastIndex=0;for(const m of block.matchAll(moneyRx))prev.variants.push({label:m[1].trim().replace(/[-:]$/,'').trim()||'Standard',price:+m[2].replace(/,/g,'')})}continue}
     if(pending){if(/^(?:A |An |The |Tender |Soft |Crispy |Juicy |Rich |Aromatic |Fresh |Fluffy |Succulent |Delicious |Classic |Light |Golden |Fragrant |Our |Made |Served |Featuring |This )/i.test(first)){pending.description+=` ${lines.join(' ')}`.trim();continue}flush()}
     pending={branch,page:pageNo,column,category:cat,name:first.replace(/\s+/g,' ').replace(/[.:]+$/,'').trim(),description:lines.slice(1).join(' ').replace(/\s+/g,' ').trim(),variants:[],sourceBlock:block};continue;
    }
    flush();let name=first.replace(/\s+/g,' ').replace(/[.:]+$/,'').trim();if(name.length>72||/^(source|all prices|follow us|call to order|preparation time|vat)/i.test(name))continue;
    let variants=[];moneyRx.lastIndex=0;for(const m of block.matchAll(moneyRx))variants.push({label:m[1].trim().replace(/[-:]$/,'').trim()||'Standard',price:+m[2].replace(/,/g,'')});
    let description=lines.slice(1).filter(s=>{moneyRx.lastIndex=0;return !moneyRx.test(s)}).join(' ').replace(/\s+/g,' ').trim();
    rows.push({branch,page:pageNo,column,category:cat,name,description,variants,sourceBlock:block});
   }flush();
  }
 }
 return rows;
}
const records=[...section('kampala-road','## Kampala Road — restaurant food','## Naguru — restaurant food'),...section('naguru','## Naguru — restaurant food','## Supplementary menu source records')];
const stats={sourceRecords:records.length,byBranch:{},categories:[...new Set(records.map(x=>x.category))]};for(const x of records)stats.byBranch[x.branch]=(stats.byBranch[x.branch]||0)+1;
const normalize=s=>slug(s).split('-').sort().join('-');
const ids={};for(const r of records){const canonical=aliases[r.name]||r.name;let existing=old.find(x=>normalize(x.name)===normalize(canonical));if(!existing&&canonical==='Chicken Manchow Soup')existing=old.find(x=>x.id==='chicken-manchow-soup');if(existing)ids[r.name]=existing.id;}
stats.matchedLegacy=Object.keys(ids).length;stats.records=records.map(x=>({branch:x.branch,page:x.page,category:x.category,name:x.name,description:x.description,variants:x.variants,id:ids[x.name]||slug(aliases[x.name]||x.name)}));
const aliasName=r=>{
 if(r.name==='Crispy Fried Chilly Garlic')return /Chips\s*\(\s*Mild/i.test(r.description)?'Crispy Fried Garlic Chips (Mild)':'Crispy Fried Garlic Chips (Spicy)';
 if(r.name==='Chef Special Chicken Mint')return 'Chicken Mint Bura';
 if(r.name==='Punjabi Dhaba Chicken (Bone-')return 'Punjabi Dhaba Chicken (Boneless)';
 if(r.name==='Punjabi Dhaba Chicken ( With')return 'Punjabi Dhaba Chicken (With Bone)';
 if(r.name==='Banjara Garlic chickenTikka')return 'Banjara Garlic Chicken Tikka';
 if(r.name==='Tandoori Alo Nzakat')return 'Tandoori Aloo Nazakat';
 if(r.name==='Amsitsari Fish Fry')return 'Amritsari Fish Fry';
 if(r.name==='Crispy Ftried Fish Fillet')return 'Crispy Fried Fish Fillet';
 if(r.name==='Pudhina Prantha')return 'Pudina Paratha';
 return aliases[r.name]||r.name;
};
const result=new Map(),review=new Set(['Turbo Naan without cheese','Masala Papad Fried','Papdi Chaat','Kulfi Mango or pistachio']);
for(const r of records){
 const display=aliasName(r),legacyName=aliases[display]||display;let legacy=old.find(x=>slug(x.name)===slug(legacyName));
 if(!legacy&&display==='Chicken Manchow Soup')legacy=old.find(x=>x.id==='chicken-manchow-soup');
 const id=legacy?.id||slug(display),status=review.has(r.name)?'pending-confirmation':'confirmed';
 const category=r.category==='restaurant-food'?'restaurant-items':r.category;
 let p=result.get(id);if(!p){p={id,name:legacy?.name||display,sourceNames:[],description:legacy?.description||r.description||'',collection:'restaurant-food',category:legacy?.category||category,vegetarian:legacy?!!legacy.vegetarian:['vegetarian-starters','vegetarian-mains'].includes(category)?true:['non-vegetarian-starters','non-vegetarian-mains'].includes(category)?false:null,spice:legacy?.spice||null,imagePath:legacy?.image||`images/items/food/${id}.webp`,reviewStatus:status,branchOffers:{},sourceRecords:[]};result.set(id,p)}
 if(!p.sourceNames.includes(r.name))p.sourceNames.push(r.name);
 p.sourceRecords.push({branch:r.branch,page:r.page,filename:r.branch==='kampala-road'?'FINAL FOOD MENU KAMPALA ROAD-1.pdf':'FINAL FOOD MENU NAGURU.pdf'});
 let offer=p.branchOffers[r.branch];if(!offer)offer=p.branchOffers[r.branch]={status,category,variants:[],sourcePage:r.page};
 for(const v of r.variants){const label=v.label||'Standard',variant={id:slug(label)||'standard',label,price:v.price};if(!offer.variants.some(x=>x.id===variant.id&&x.price===variant.price))offer.variants.push(variant)}
}
const products=[...result.values()].sort((a,b)=>a.id.localeCompare(b.id));
const raita=result.get('raita');if(raita){raita.name='Raita';raita.description='';raita.sourceNames=[...new Set([...raita.sourceNames,'Mix Vegetable Raitath','Boondi Raita'])];const o=raita.branchOffers['kampala-road'];if(o)o.variants=[{id:'mix-vegetable',label:'Mix Vegetable Raita',price:10000},{id:'boondi',label:'Boondi Raita',price:10000}]}
const cucumber=result.get('cucumber-raita');if(cucumber&&cucumber.description==='r,')cucumber.description='';
for(const id of ['turbo-naan-without-cheese','masala-papad-fried']){const p=result.get(id);if(p)p.description=''}
fs.writeFileSync('branch-menu-data.js','const BRANCH_RESTAURANT_PRODUCTS = '+JSON.stringify(products,null,2)+';\n');
stats.products=products.length;stats.matchedLegacy=products.filter(p=>old.some(x=>x.id===p.id)).length;stats.branchOfferCounts={};for(const p of products)for(const [b,o] of Object.entries(p.branchOffers))if(o.status==='confirmed')stats.branchOfferCounts[b]=(stats.branchOfferCounts[b]||0)+1;
console.log(JSON.stringify({rawRows:records.length,products:stats.products,matchedLegacy:stats.matchedLegacy,branchOfferCounts:stats.branchOfferCounts,categories:[...new Set(products.map(x=>x.category))]},null,2));
