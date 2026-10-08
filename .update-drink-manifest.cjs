const fs=require('fs'),vm=require('vm');
const context={};
vm.runInNewContext(fs.readFileSync('data.js','utf8')+';globalThis.__export={DRINKS,DRINK_GROUPS};',context);
const {DRINKS,DRINK_GROUPS}=context.__export;
const file='item-image-manifest.json',manifest=JSON.parse(fs.readFileSync(file,'utf8'));
const byId=new Map(manifest.map(item=>[item.id,item]));
for(const drink of DRINKS){
 const row=byId.get(drink.id); if(!row)throw new Error(`Missing manifest record: ${drink.id}`);
 row.description=drink.description||'';
 row.category=drink.category;
 row.categoryName=DRINK_GROUPS.find(group=>group.id===drink.category)?.name||drink.category;
 row.subcategory=drink.subcategory||null;
 row.sourceNames=drink.sourceNames||row.sourceNames||[];
 row.servingVariant=(drink.variants||[]).map(variant=>variant.label).join(' / ')||drink.serving||null;
 row.servingVariantsByBranch=Object.fromEntries(['kampala-road','naguru'].map(branch=>[branch,(drink.branchOffers[branch].variants||[]).map(variant=>({id:variant.id,label:variant.label,price:variant.price}))]));
 row.branchAvailability=Object.fromEntries(['kampala-road','naguru'].map(branch=>[branch,drink.branchOffers[branch].status]));
 row.reviewStatus=drink.reviewStatus;
}
fs.writeFileSync(file,JSON.stringify(manifest,null,2)+'\n');
console.log(JSON.stringify({updated:DRINKS.length,papaya:byId.get('refreshments-milkshakes-papaya'),mocktail:byId.get('cocktails-mocktails-signature-mocktails-blue-lagoon')},null,2));
