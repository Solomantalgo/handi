# HAANDI RESTAURANT — branch menu and implementation brief

Indian • Asian • International Flavours

Updated 7 October 2026 from the supplied restaurant drafts and WhatsApp instructions. **Review draft:** supplied prices are recorded in UGX; recording a price does not imply approval to publish it. This document mainly covers food. The existing drinks content is retained below.

## How to use this document

1. Use the branch food catalogs as the latest supplied food inventory and price reference. Kampala Road and Naguru are separate menus.
2. Add the supplementary pizza, South Indian, sweets and bakery collections using their source records below. Do not guess branch availability where it is pending.
3. Apply the WhatsApp additions and schedules below. Do not create duplicate Papaya milkshake records.
4. Keep the previous food descriptions for matching confirmed products. An old dish absent from a new branch draft is **unconfirmed**, not automatically available and not automatically deleted.
5. Source excerpts retain variant prices and wording for reconciliation. They are reference material, not text to dump into website cards. Correct obvious spelling only after preserving source names as aliases. Do not parse multi-column bakery rows by whitespace into arbitrary products.

## Branches and orders

| Branch ID | Display name | Source address | Printed contact (reference only) |
|---|---|---|---|
| kampala-road | Kampala Road | Plot 7, 1st Floor Commercial Plaza | 0755 123 546 |
| naguru | Naguru | Plot 20–30 Saddler Way, opposite Kampala Parents School | 0701 411 221 |

Continue routing digital orders to the previously supplied WhatsApp number **+256 749 710372** (`256749710372`). Do not replace it with a PDF contact without confirmation. Support dine-in, takeaway and delivery. Leave delivery coverage and fees unspecified; restaurant confirmation is required. WhatsApp opens a prepared message for the customer to send; opening it is not an accepted order.

Include branch, fulfilment method, item names, quantities, selected variants, spice requests, notes and known prices in the message. Dine-in needs table identification; takeaway needs collection details; delivery needs an address. Never invent a missing price or treat it as zero. Label any subtotal containing unpriced products incomplete; restaurant confirms final amount.

## Navigation for a larger menu

- Select **Kampala Road or Naguru** first. Keep the selected branch visible with a Change branch control. Branch-specific QR links may preselect it.
- Start with collection shortcuts: **Restaurant Food, Pizza, Dosa & South Indian, Sweets & Snacks, Bakery, Drinks**. Show only collections with confirmed availability for that branch. Pending collections can be reviewed in development without being silently offered to guests.
- Inside a collection, show category navigation with counts, a searchable mobile category sheet and a clear current-category label. Use the existing category artwork; do not put every subcategory in one crowded tab row.
- Search all confirmed items in the selected branch, including aliases. Group results by collection/category and show the serving variant. Provide a clear empty state and reset filters.
- Display a manageable first batch (approximately 12–24 items) with Load more and a visible result count. Preserve scroll/filter state when returning from item details. Keep image loading lazy and missing-photo areas neutral.
- Veg/non-veg and spice filters apply only where data is verified. Do not infer allergens, vegan status or spice levels from photographs.
- Use separate carts per branch. Changing branch preserves the previous branch cart and clearly switches the active cart; never mix branch prices or silently discard items. Order review repeats the branch.
- Scheduled specials remain discoverable with an availability badge; allow ordering only within the confirmed schedule, unless the restaurant confirms advance orders.

## Data and image contract

Keep one stable product identity for a matching dish, with branch-specific offers and variants. A different price alone does not require a new image or duplicate product. Different recipes or serving forms may require separate products. Restaurant dessert servings and retail sweet weights remain separate offers.

Required fields: stable item ID; source name and search aliases; collection and category; description; verified dietary/spice labels or null; branch availability; variant label and UGX price or null; schedule and timezone where relevant; source filename/page; review status; image path. Preserve existing IDs and agreed item-image paths when matching current items. Add new IDs only after reconciliation. Rebuild the shared item-image manifest from approved data; the old 388-item count is not a target.

Website agent owns code, menu data and the authoritative item manifest. Image agent owns item files and image-source records. Image work can continue for unchanged IDs while new products are reconciled. Do not rename completed assets or source images against uncertain new IDs. Each distinct dish needs a suitable photograph; preserve category artwork and banners. Stock images remain temporary until restaurant photographs are supplied.

## WhatsApp additions and availability

| Product | Collection/category | Price UGX | Branch | Availability / instruction |
|---|---|---:|---|---|
| Dhaba Dal with Kulcha | Restaurant Food / Specials | 20,000 | Naguru | Sunday only, 12:00–15:00 and 19:00–22:00, Africa/Kampala. The chat is more specific than the weekend wording on the flyer. |
| Steamed Veg Momos | Restaurant Food / Momos | 32,000 | Pending confirmation | Friday, Saturday, Sunday; hours not supplied. |
| Afghani Veg Momos | Restaurant Food / Momos | 32,000 | Pending confirmation | Friday, Saturday, Sunday; hours not supplied. |
| Tandoori Veg Momos | Restaurant Food / Momos | 32,000 | Pending confirmation | Friday, Saturday, Sunday; hours not supplied. |
| Steamed Chicken Momos | Restaurant Food / Momos | 35,000 | Pending confirmation | Friday, Saturday, Sunday; hours not supplied. |
| Afghani Chicken Momos | Restaurant Food / Momos | 35,000 | Pending confirmation | Friday, Saturday, Sunday; hours not supplied. |
| Tandoori Chicken Momos | Restaurant Food / Momos | 35,000 | Pending confirmation | Friday, Saturday, Sunday; hours not supplied. |
| Papaya Milkshake | Drinks / Milkshakes | 18,000 | Naguru | Enrich existing Papaya milkshake; do not add a duplicate. |
| Peri Peri Masala Dosa | Dosa & South Indian / Dosa | 30,000 | Naguru | Add to dosa collection. |
| Bombay Pan Shake | Drinks / Milkshakes | 12,000 | Pending confirmation | Preserve printed name; Paan may be a search alias, subject to confirmation. |

### Shared drinks availability confirmation (8 October 2026)

The restaurant confirmed that the existing main drinks menu applies to both Kampala Road and Naguru. This confirms branch availability only; it does not transfer a price from one branch to the other. Preserve every existing drink ID, description, serving guidance, variant and item-image path. Keep a missing branch price null and show “Price to be confirmed.”

Papaya Milkshake is available at both branches. Its Kampala Road price remains unconfirmed and null; its Naguru price is UGX 18,000. Do not duplicate the existing Papaya record.

The Blue Lagoon record under Signature Mocktails retains an alcoholic vodka description that conflicts with its mocktail category/classification. Keep this record pending and unavailable for guest ordering until clarified. The separate alcoholic Blue Lagoon record retains its own ID and classification. Bombay Pan Shake remains pending for branch availability.

The messages request inclusion in the main digital menu, even where separate table menus exist. Actual dish photographs supplied alongside flyers do not create additional products.

## Differences and questions to resolve before publishing

| Issue | Required handling |
|---|---|
| Chicken Manchow and Chicken Hot & Sour soups | Kampala Road 22,000; Naguru 20,000. Preserve branch prices. |
| Butter Chicken, Kadhai Chicken and Chicken Curry | Preserve source bone/boneless variants and branch differences. Do not assume both variants at Kampala Road. |
| Kampala-only source sections | Raita, New Edition and combo meals appear in Kampala draft; do not copy them to Naguru automatically. |
| Naguru expanded offerings | Retain its additional soya dishes, vegetarian mains, chicken mains and biryanis. |
| Repeated Chicken Mint Bura in Kampala source | One product/offer where the repeated entries are identical; preserve source spelling as alias. |
| Supplement branch scope | Pizza prints the Naguru contact; confirm availability rather than treating that as proof for both branches. Dosa branch scope pending except the explicit Naguru addition. Bakery/sweets print both contacts; provisionally record both as candidate branches, confirm actual fulfilment. |
| Turbo Naan without cheese | Source description mentions cheese; do not display that contradictory description. Confirm recipe. |
| Mysore Plain Dosa | Source repeats potato filling from Masala; confirm whether plain includes filling. |
| Fried Masala Papad | Source description refers to roasted; confirm wording. |
| Papdi Chaat | Restaurant serving 20,000 and sweets/snacks 8,000 are distinct source offers; confirm portions, do not overwrite. |
| Kulfi | Restaurant dessert 18,000 versus retail sweets 15,000; confirm serving/units. |
| Sweets snacks units | Several snack prices have no weight/portion, including cassava chips 70,000 and potato chips 60,000. Do not assume kilogram or packet. |
| Bakery timing | Cakes/cheesecakes/puffs carry advance-order notes. Preserve section-specific 24-hour notice; general 20–25-minute food guidance does not apply to advance bakery orders. |
| Promotions and cancellations | Printed Monday dosa discount and non-cancellation wording need approval/validity confirmation. Do not implement an automatic discount or cancellation restriction from a draft. |
| VAT | Food/pizza/dosa sources state VAT-inclusive prices. Confirm final pricing before launch; do not extend that statement to unsupported collections. |
| Unlisted old food / missing drink prices | Keep for reconciliation, not automatic branch offers. Existing drinks remain a separate reference; only the supplied shake additions get the new confirmed source prices. |

## Latest branch food source catalogs

The following page-based records preserve the supplied draft content. Prices attached to bone/boneless, half/full or scoop choices are variants of the named dish. Column markers keep the PDF reading order; small clipped words are transcription limitations and must be checked against the PDF during final data entry. Marketing paragraphs are not products.


## Kampala Road — restaurant food

Source: `FINAL FOOD MENU KAMPALA ROAD-1.pdf`. Draft branch availability: this branch only.


### Kampala Road — source page 1

   Welcome to Haandi Restaurant
      Where Every Dish Tells a Story


  Step into Haandi Restaurant, where flavors come alive! We invite
  you to embark on a culinary adventure, blending authentic Indian
   spices with innovative Indo-Chinese creations. From the sizzling
  aromas of our tandoor to the rich, comforting curries, each bite is
   crafted with passion and the finest ingredients. Whether you're
    craving the warmth of a traditional biryani, the spice of a fiery
     curry, or the sweetness of our delectable desserts, we've got
              something to excite every taste bud!


         Our Fresh Food Promise
     At Haandi Restaurant, we pride ourselves on serving only the
   freshest food. Every dish is carefully crafted using the finest ingre-
     dients, ensuring that each bite is full of flavor and authenticity.


    Famous for Indian Sweets & Bakery
   Haandi Restaurant is particularly famous for its delectable Indian
 sweets and bakery items. From the rich sweetness of Gulab jamun to
   the delicate flavors of freshly baked cakes, our sweets and bakery
             treats are a true delight for every dessert lover.

Dive into our menu and discover the magic
  Bold Flavors, Unforgettable Memories.
### Kampala Road — source page 2

#### Column 1
Delicious Soups & Broths

Cream of Tomato Soup
A smooth and velvety blend of ripe tomatoes,
finished with a touch of cream.
 20,000/=

Cream of Mushroom Soup
A rich and creamy blend of earthy mushrooms,
simmered to perfection for a comforting, velvety
soup.
 20,000/=

Lemon Coriander Soup
A light, fragrant broth infused with fresh lemon
and coriander, offering a zesty, refreshing flavor
in every spoonful.
 20,000/=

Veg Manchow Soup
A warming, flavorful soup with finely chopped
vegetables, a rich, spicy broth, and a crispy
noodle topping that brings crunch in every
spoonful.
 20,000/=

Hot and Sour Soup Veg
A perfect balance of spicy heat and tangy flavor
with, fresh vegetables, and aromatic spices in a
savory broth.
 20,000/=

Manchow Chicken Soup
A hearty and flavorful Chinese-inspired soup wit
tender chicken, vegetables, and crispy fried
noodles in a spicy, savory broth.
 22,000/=

Hot and Sour Chicken Soup
A perfect balance of spicy heat and tangy flavor
with tender chicken, fresh vegetables, and
aromatic spices in a savory broth.
 22,000/=
#### Column 2
    Healthy Salad Bowl

     Greek Salad
     A light, crisp salad with cucumbers,
      tomatoes, feta cheese, and fresh
       herbs, tossed in a flavorful olive oil
       dressing for a refreshing bite.
     22,000/=

y     Green Salad
     A refreshing mix of cucumber,
      tomatoes, carrots, onion, lemon,
      green chili.

      12,000/=

     Kachumbari Salad
     A vibrant East African salad featuring
      tomatoes, onions, and cucumbers,
      seasoned with cilantro, lime, and
      a touch of heat from chili, creating
      a perfect balance of flavors.
     12,000/=

    Creamy Coleslaw Salad
        All time favourite
r,     20,000/=

    Raita
     Mix Vegetable Raitath
      10,000/=
     Boondi Raita
      10,000/=

    Cucumber Raita
r,
      10,000/=

     Burani Raita
      10,000/=

     Pineapple Raita
      12,000/=
### Kampala Road — source page 3

#### Column 1
Appetizer

Plain Chips
Crispy, golden-brown potato chips,
perfectly seasoned for a light and satis-
fying snack.
 15,000/=

Mixed Vegetable Bhajias
A delicious combination of fresh vegeta-
bles, seasoned with aromatic spices and
deep-fried to crispy perfection, offering
a flavorful bite in every piece.
 28,000/=


Masala Chips
Crispy, golden potato chips tossed in a
flavorful blend of aromatic spices, offer-
ing a zesty and tangy twist on a classic
snack.
 28,000/=


Crispy Fried Chilly Garlic
Chips ( Spicy )
Golden, crispy potato chips seasoned
with a fiery blend of chili and aromatic
garlic, offering a perfect balance of heat
and flavor in every bite.

 30,000/=
#### Column 2
Masala Papad Roasted
Crisp roasted pappadums seasoned
with a fragrant mix of spices, creating a
perfect combination of crunch and bold
flavor.

5,000/=

Masala Papad Fried
Crisp roasted pappadums seasoned
with a fragrant mix of spices, creating a
perfect combination of crunch and bold
flavor.

5,000/=

Plain Papad Roasted

3,000/=

Plain Papad Fried

3,000/=

Plain Peanut

 8,000/=
### Kampala Road — source page 4

#### Column 1
   NEW EDITION

Spring Chicken
Deep fried half chicken african style
served with chips and salads.

 45,000/=

Chicken Strips
Better fried chicken mild spicy served
with chips and salads.

 50,000/=


Orange Chicken
Chicken cubes better fry asian style
orange sauce served with rice.

 45,000/=

Banjara Garlic chickenTikka
Cubes of chicken marinated by ginger
garlic with creemy malai finished by
clay owen.

 45,000/=

Tandoori Whole Fish
Tilapia marinated with ginger garlic
paste, hung curd with five Indian
spices with charcol grill served with
salads and chutney.
 45,000/=


Fish Crackers
Fish fillet crispy marinated by indian
spicies served with chips and salads.

 45,000/=
#### Column 2
 Fish Fingers
 Crum fried fish fillet, mustered
 lemon, ginger and garlic, served
 with chips salads and tartar sauce.

 35,000/=


Deep Fried Whole Fish
Marinated with ginger garlic paste,
lime, black paper deep fried, served
with chips and salads.

 50,000/=


Sweet and Sour Whole Fish
Whole fish deep fried marinated by
salt, lemon, tossed with pineapple and
bellpepper, sweet and sour taste
served with chips and salads.

 50,000/=

Tasty Chaat Delights

Aloo Chaat
A delicious Indian street food made with
crispy fried potatoes, topped with tangy
tamarind and mint chutneys, and seasoned
with aromatic spices like cumin and Chaat
masala. Garnished with fresh onions,
coriander, and a touch of yogurt.

 28,000/=

Samosa Chaat
A mouthwatering fusion of crispy, golden
samosas broken into bite-sized pieces and
topped with tangy tamarind chutney, mint
chutney, yogurt, and a blend of aromatic
spices. Garnished with fresh cilantro, onions,
and sev, it’s a perfect balance of crunch,
spice.

 28,000/=
### Kampala Road — source page 5

#### Column 1
Papdi Chaat
Crispy Papdi (fried dough crackers) topped
with creamy yogurt, tangy tamarind chutney,
and spicy mint chutney. Garnished with fresh
onions, pomegranate seeds, and a sprinkle of
Chaat masala, Papdi Chaat offers a perfect
mix of crunchy, tangy, and spicy flavors in
every bite.

 20,000/=

Veggie Temptations

Paneer Tikka Tandoori
Cubes of soft paneer marinated in a
rich blend of yogurt and aromatic
spices, then grilled to perfection in a
traditional tandoor.

 Half 28,000/=

  Full 35,000/=


Haandi Special Chilly Paneer
Soft, crispy cubes of paneer cooked
with crunchy onions and vibrant
capsicum (bell peppers) in a bold,
tangy, home-made spicy sauce.

  35,000/=
#### Column 2
Chilly Paneer Chinese Style
Crispy cubes of paneer stir-fried with
onions, capsicum, and a blend of bold
Chinese sauces, including soy sauce,
vinegar, and chili sauce. Infused with
aromatic garlic, ginger.
 35,000/=


Tandoori Malai Broccoli
Fresh broccoli florets marinated in a
rich, creamy blend of yogurt, cheese,
and aromatic spices, then grilled to
perfection in a traditional tandoor.

 35,000/=

Veg Manchurian Dry
Bite-sized vegetable balls made from
finely chopped mixed vegetables,
seasoned with spices, and deep-fried
until golden and crispy. These crispy
fritters are then tossed in a zesty,
tangy, and slightly spicy Manchurian
sauce,

  32,000/=

Crispy Veg Salt and Pepper
A delightful mix of crispy, battered
fried vegetables like cauliflower,
beans, zucchini, carrots, broccoli, bell
peppers, seasoned with a perfect
balance of salt, cracked black pepper,
and aromatic spices. Stir-fried to
golden perfection.
 33,000/=

Chilly Corn
Crispy golden corn kernels tossed in a
flavorful mix of spicy chili sauce,
vibrant bell peppers, and a hint of
garlic.
 35,000/=
### Kampala Road — source page 6

#### Column 1
Chilly Mushroom
Tender, juicy mushrooms coated in a light
crispy batter, stir-fried with a zesty
chili-garlic sauce, crunchy bell peppers,
and a medley of spices.
  35,000/=


Mushroom Salt and Pepper
Crispy, golden-fried mushrooms seasoned
with a perfect blend of salt, cracked black
pepper, and aromatic spices. Tossed with
sautéed onions, garlic, and chili for a burst
of flavor in every bite.
  35,000/=


Paneer Mint Burra
Chef’s Special
  38,000/=

Honey Chili Potato
Crispy potato fingers tossed in a perfect
blend of honey, chilli and aromatic spices.

  28,000/=


Soya Chaap

 Afghani Malai Soya Chaap
 Tender Soya Chaap Marinated In Rich
 Creamy Blend Of Yoghurt, Cashews Adn
 Aromatic Spices.

  38,000/=


 Tandoori Soya Chaap
 Succulent Soya Chaap Marinated In
 Flavourful Mix Of Yoghurt Spices And
 Herbs.

  35,000/=
#### Column 2
   Hara Bhara Kebab
   A delicious vegetarian delight, Hara
   Bhara Kebab features a blend of fresh
    spinach, peas, and aromatic herbs.
    32,000/=


  Veg Platter
    Vegetarian delight including Hara Bhara Kebab,
    Malai Broccoli, Paneer Tikka, Veg Manchurian,
    Aloo Nazakat, Tandoori Pineapple.

   45,000/=


Sizzling Non-Veg Starters

Tandoori Chicken
Juicy chicken marinated in a blend of
yogurt, aromatic spices, and a touch of
tangy citrus, then slow-roasted to
perfection in a traditional tandoor.
 Half - 35,000/=

 Full - 60,000/=

Chicken Tikka Dry Tandoori
Savor the timeless taste of tender,
boneless chicken, marinated in a luxurious
mix of creamy yogurt, vibrant spices, and
a splash of citrus. Roasted to smoky
perfection in a traditional tandoor.
 35,000/=


Chicken Malai Tikka
Indulge in the rich, creamy flavors of
Chicken Malai Tikka. Succulent chicken
pieces marinated in a luscious blend of
fresh cream, yogurt, mild spices, and
fragrant herbs. Grilled to perfection in a
tandoor.
 38,000/=
### Kampala Road — source page 7

#### Column 1
Achari Chicken Tikka
A mouthwatering fusion of tangy and
spicy, Achari Chicken Tikka features
tender chicken marinated in a unique
blend of pickling spices like mustard,
fennel, and nigella seeds. Grilled to
perfection.
 35,000/=


Chicken Kalimirch Tikka Dry
Savor the smoky and peppery good-
ness of Chicken Kalimirch Tikka Dry.
Marinated in a blend of black pepper,
yogurt, and aromatic spices, this
tender chicken is grilled to perfection
in a tandoor.
 38,000/=


Chef Special Chicken Mint
Bura
A unique creation from our chef.
Tossed with a mint and ginger.
 40,000/=

Chef Special Chicken Mint
Bura
A unique creation from our chef.
Tossed with a mint and ginger.
 40,000/=


Chilly Chicken Dry
Crispy chicken pieces tossed in a
fiery, tangy sauce with fresh chili,
garlic, and a touch of soy for depth.
Stir-fried to perfection.
 35,000/=
#### Column 2
Chicken Lollipop
Juicy chicken wings expertly marinated
in a savory blend of spices, then
deep-fried to golden perfection, creat-
ing a crispy, flavorful exterior.
 30,000/=


Chicken Drums of Heaven
Crispy, golden-fried chicken drumsticks
coated in a crunchy exterior. Tossed
with sautéed onions and capsicum for
an added crunch and vibrant touch.
 35,000/=

Chicken Seekh Kebab
Finely minced chicken, infused with a
blend of aromatic spices, herbs, and a
touch of cream, shaped onto skewers
and grilled to perfection. These
succulent kebabs have a smoky char on
the outside, while remaining tender and
juicy inside.

 32,000/=

Sweet and Sour Chicken
Crispy chicken pieces tossed in a tangy,
sweet, and slightly sour sauce made
with pineapple, vinegar, and bell
peppers.

 40,000/=

Haandi Special Goat Ribs
Tender, succulent goat ribs
slow-cooked to perfection in a tradi-
tional Haandi pot, infused with a rich
blend of spices and herbs. Juicy,
flavorful, and fall-off-the-bone deli-
cious, this dish is a true masterpiece
of culinary craftsmanship.

 Half - 35,000/=

 Full - 60,000/=
### Kampala Road — source page 8

#### Column 1
Mutton Seekh Kebab
Juicy minced mutton delicately spiced
with aromatic herbs and seasonings,
shaped onto skewers and grilled to
perfection. These tender, flavorful
kebabs offer a smoky char on the
outside while remaining succulent and
juicy on the inside.
 33,000/=

Non-Veg Platter
A perfect combination of mix grill,
meat and sea food.
 Half - 55,000/=

 Full - 90,000/=

Tandoori Fish Tikka
Smoky flavors of Tandoori Fish
Tikka. Tender pieces of fish
marinated in a rich blend of yogurt,
aromatic spices, and a hint of
citrus, then cooked to perfection in a
traditional tandoor.
 38,000/=


Chilly Fish Dry
Crispy, golden-fried fish tossed in a
fiery, tangy chili sauce with hints of
garlic, ginger, and a blend of aromatic
spices. Stir-fried with vibrant
bell peppers and onions.

 35,000/=

Fish Salt and Pepper
Tender fish fillets lightly battered and
fried to a crispy golden perfection,
then seasoned with a perfect balance
of salt, cracked black pepper, and a
touch of aromatic spices. Stir-fried
with fresh onions and bell peppers.

 35,000/=
#### Column 2
 Tandoori Prawns
 Succulent prawns marinated in a blend of
 rich yogurt, fragrant spices, and a touch
 of citrus, then grilled to perfection in a
 traditional tandoor.

 90,000/=

 Chilly Prawns
 Juicy prawns stir-fried in a spicy, tangy
 chili sauce with a burst of garlic, ginger,
 and fresh vegetables. The dish combines
 a perfect balance of heat, savory
 richness, and a hint of sweetness,
 offering a fiery kick with every bite.

  75,000/=

COMBOS

Chicken Combo
Curry chicken, roasted chicken, rice, naan,
sweet.
 50,000/=

Mutton Combo
Rogni korma, ribs, rice, naan and sweet.
 50,000/=

Fish Combo
Fish curry, fish tikka, rice, naan, and sweet.
 50,000/=

Veg Combo
Veg curry, veg kebab, rice, naan, and sweet.
 45,000/=


Prawns Combo
Grill prawns 3, balchow prawns curry, rice,
naan and sweet.

 70,000/=
### Kampala Road — source page 9

#### Column 1
Veg Main Course

Paneer Tikka Masala
Crispy, grilled chunks of paneer
marinated in a fragrant blend of
spices, yogurt, and herbs, then
simmered in a rich, creamy toma-
to-based gravy.
 35,000/=

Paneer Makhani
Soft, melt-in-your-mouth cubes of
paneer simmered in a rich, creamy
tomato-based gravy infused with
aromatic spices and a touch of
butter.
 35,000/=


Paneer Butter Masala
Soft, golden cubes of paneer
cooked in a rich and creamy but-
ter-based gravy, infused with a
perfect blend of aromatic spices
and tomatoes.
 35,000/=


Corn Paneer Masala
A delightful combination of tender
paneer and sweet corn simmered in
a rich, flavorful masala sauce made
with fresh tomatoes, onions, and
aromatic spices.

 35,000/=
#### Column 2
Palak Paneer
Soft cubes of paneer cooked in a rich,
smooth spinach gravy, spiced delicately
with a blend of aromatic herbs and
spices.

 35,000/=


Paneer Burji
Crumbling soft paneer cooked with
onions, tomatoes, and a blend of aromat-
ic spices, Paneer Burji is a savory,
flavorful dish with a delightful mix of
textures.

 35,000/=


Kadhai Paneer
Spicy coated cheese cooked with bell
pepper and onions and aromatic spices.

 35,000/=

Palak Corn Masala
A vibrant and healthy dish combining
tender corn kernels with fresh
 spinach, cooked in a rich, spiced
masala sauce.
 35,000/=

Mix Veg Kolhapuri
A spicy and flavorful dish from the
 heart of Kolhapur, Mix Veg Kolhapuri
 features a medley of seasonal
vegetables cooked in a fiery, tangy
masala made with freshly ground
 Kolhapuri spices.
 34,000/=
### Kampala Road — source page 10

#### Column 1
Mix Vegetables (With Paneer)
A colorful medley of seasonal
vegetables cooked to perfection in a
mild, aromatic masala, offering a
healthy and satisfying combination of
textures and flavors.
 32,000/=

Malai Kofta (Brown Gravy)
Soft, melt-in-your-mouth koftas made
from a creamy mixture of paneer and
vegetables, gently simmered in a
luxurious, spiced brown gravy.

 32,000/=

Amritsari Chole Masala
A rich and aromatic dish, Amritsari
Chole Masala features tender chick-
peas cooked in a robust blend of
spices, tomatoes, and onions, creating
a thick, flavorful gravy. Infused with the
unique flavors of Amritsari masala.
 30,000/=


Mushroom Hara Piyaza
A delightful vegetarian dish where
tender mushrooms are sautéed with
fresh, crisp green onions (hara piyaza),
cooked in a fragrant blend of spices.
 35,000/=

Kajju Curry
A luxurious curry made with roasted
cashews simmered in a rich, creamy
tomato-based gravy, infused with
aromatic spices and a touch of cream.

 40,000/=
#### Column 2
Dal Makhani
A creamy, indulgent dish made with
black lentils and kidney beans, slowly
simmered to perfection and enriched
with butter, cream, and a blend of
aromatic spices.

 30,000/=

Yellow Dal Tadka
A classic comfort food, Yellow Dal
Tadka features split yellow lentils
cooked to perfection and tempered
with a fragrant tadka of ghee, cumin,
garlic, and a hint of red chili.

 28,000/=
### Kampala Road — source page 11

#### Column 1
CHINESE MENU

Vegetable Manchurian Gravy
Soft, fried vegetable balls in a spicy,
savory sauce made with soy sauce, chili
paste, and aromatic spices.

35,000/=

Types of Fried Rice

Veg Fried Rice
25,000/=
Chilli Garlic Fried Rice
25,000/=

Burnt Garlic Fried Rice
28,000/=

Egg Fried Rice
25,000/=

Chicken Fried Rice
28,000/=

Types of Noodles

Veg Chow mein
25,000/=

Chili Garlic Noodles Veg
26,000/=

Chili Garlic Noodles Chicken
28,000/=

Chicken Chow mein
28,000/=
#### Column 2
Non Veg Main Course

Butter Chicken
A rich and creamy classic! Tender chick-
en pieces cooked in a velvety toma-
to-based curry, infused with butter,
cream, and a blend of aromatic Indian
spices. Perfectly paired with naan or
rice.
 Boneless 36,000/=




Chicken Tikka Masala
Succulent chicken tikka pieces simmered
in a luscious tomato-based curry,
flavored with creamy yogurt, fresh
herbs, and a harmonious blend of spices.
38,000/=
### Kampala Road — source page 12

#### Column 1
 Kadhai Chicken
 A flavorful and hearty dish! Tender
 chicken cooked with fresh bell pep-
 pers, onions, and tomatoes in a
 robust blend of spices.
 Boneless 35,000/=



 Chicken Malai Korma
 A creamy and indulgent treat! Suc-
 culent chicken cooked in a rich,
 velvety sauce made with cream,
 cashews, and aromatic spices,
 finished with a touch of rose water
 and saffron for a royal flavor.

 40,000/=


 Chicken Curry
 A timeless classic! Tender chicken
 simmered in a flavorful blend of
 onions, tomatoes, and aromatic
 spices.

 Boneless 35,000/=


Punjabi Dhaba Chicken (Bone-
less)
A rustic and hearty dish straight from
the roadside dhabas of Punjab! Bone-
less chicken pieces cooked in a
robust, spicy gravy made with toma-
toes, onions, and a medley of Punjabi
spices.

 40,000/=
#### Column 2
Punjabi Dhaba Chicken ( With
Bone )
An authentic Punjabi favorite! Juicy,
bone-in chicken pieces slow-cooked in
a rich and spicy gravy made with
onions, tomatoes, ginger, garlic, and
bold Punjabi spices.

38,000/=


Fish Tikka Masala
Tender pieces of fish marinated in
yogurt and spices, then grilled to
perfection and simmered in a rich,
creamy tomato-based sauce. Flavored
with a blend of aromatic spices and a
hint of smokiness.

40,000/=

Coconut Fish Curry
Tender fish cooked in a rich spicy
coconut curry.

 38,000/=

Mutton Rogan Josh
A Kashmiri specialty! Tender mutton
 pieces slow-cooked in a fragrant, rich
 gravy made with yogurt, aromatic
 spices, and a delicate blend of Kashmiri
 herbs.
 Boneless 38,000/=

 With bone 40,000/=


Keema Mutton
A flavorful, comforting dish made with
 minced mutton cooked with onions,
 tomatoes, and a blend of aromatic
 spices.
 35,000/=
### Kampala Road — source page 13

#### Column 1
RICE AND BIRYANI

   All Biryani is served with
      Gravy or Raita

Steamed Rice
Fluffy and perfectly cooked, our
steamed rice is a simple yet essential
side dish.
18,000/=

Jeera Rice
Fragrant basmati rice cooked with
roasted cumin seeds.
 22,000/=

Vegetable Pulao
A colorful and aromatic rice dish
made with basmati rice, mixed vege-
tables, and a blend of spices like
cumin, cardamom, and bay leaves.
Lightly seasoned and cooked to
perfection.
25,000/=

Onion Masala Pulao
Fragrant basmati rice cooked with
carmalized onions and a blend of
aromatic spices.
25,000/=

Vegetable Biryani
A fragrant, flavorful rice dish made
with mixed seasonal vegetables,
basmati rice, and a blend of aromatic
spices.
28,000/=
#### Column 2
Chicken Biryani
A fragrant and flavorful rice dish made
with tender chicken marinated in aro-
matic spices and slow-cooked with
basmati rice, saffron, and fresh herbs.
 Boneless 32,000/=



Mutton Biryani
A royal and aromatic dish featuring
tender mutton pieces marinated in a
blend of fragrant spices, slow-cooked
with basmati rice, saffron, and fresh
herbs.
 32,000/=

Chicken Tikka Biryani
Tne der chicken tikka pieces cooked
with basmati rice.
 35,000/=


Prawns Biryani
Succulent prawns marinated in aromatic
spices and layered with basmati rice,
cooked together with saffron and fresh
herbs.

 80,000/=
### Kampala Road — source page 14

#### Column 1
INDIAN BREADS

Plain Naan
A soft and fluffy traditional Indian
flatbread made with refined flour,
baked in a tandoor oven.
7,000/=

Butter Naan
A classic naan brushed generously
with butter after baking, making it
rich and flavorful.
7,000/=

Garlic Naan
A flavor-packed naan infused with
roasted garlic and herbs.
9,000/=


Cheese Naan
Stuffed with a melty cheese filling,
this naan brings a cheesy indul-
gence to the table.
15,000/=

Chilli Cheese Naan
18,000/=

Keema Naan
A unique naan stuffed with spiced
minced meat (keema), offering a
rich, savory flavor.
30,000/=


Aloo Naan
This naan is stuffed with a spiced
mashed potato filling, giving it a
comforting, earthy flavor.
15,000/=
#### Column 2
Methi Naan
Infused with fenugreek leaves
(Methi), this naan has a slightly
bitter yet aromatic flavor.

 9,000/=

Turbo Cheese Naan
A decadent and indulgent naan
stuffed with a rich blend of melted
cheese and seasoned with a hint of
herbs and spices.
 22,000/=


Turbo Naan without cheese
A decadent and indulgent naan
stuffed with a rich blend of melted
cheese and seasoned with a hint of
herbs and spices.

 15,000/=

Paneer Naan
 15,000/=


Chilli Naan
 8,000/=


Chilli Garlic Naan
 9,000/=
### Kampala Road — source page 15

#### Column 1
Lachha Paratha
A flaky, multi-layered paratha made
with whole wheat flour, rolled out
into layers and cooked until crispy
and golden.
10,000/=

Pudhina Prantha
10,000/=


Tandoori Roti
A whole wheat Indian flatbread,
cooked in the tandoor oven to give
it a smoky flavor and crispy
texture.
 Plain 5,000/=

With Butter 6,000/=


Tawa Roti with butter
A soft, unleavened flatbread
cooked on a tawa (griddle),
offering a slightly crispy texture .
6,000/=


Tawa Roti plain
A soft, unleavened flatbread
cooked on a tawa (griddle),
offering a slightly crispy texture on
the outside while remaining soft
and tender inside.
5,000/=


Rumali Roti
A thin, soft, and delicate flatbread
made with refined flour, rolled out
into a large, thin circle and cooked
on a tandoor or open flame.
10,000/=
#### Column 2
DESSERTS


Gulab Jamun
Soft, round dumplings made from milk
solids, deep-fried to golden perfection,
and soaked in a fragrant sugar syrup.
 15,000/=


Kulfi Mango or pistachio
A traditional Indian ice cream made
with reduced milk, sugar, and
flavorings like mango, pistachio.
 18,000/=


Rasmalai
Soft, spongy discs of chhena (cottage
cheese) soaked in a sweet, flavored
milk syrup made with cardamom,
saffron, and garnished with pistachios
and almonds.
 15,000/=


Choice of ice Cream
Mango, Strawberry, Chocolate, Vanilla
 1 Scoop 5,000/=

 3 Scoop 12,000/=

 Mixed 15,000/=

Chocolate Bownie with
Icecream
 25,000/=


Sizzling Chocolate brownie
with Icecream
 30,000/=
### Kampala Road — source page 16

#### Column 1
    For Visiting Haan


OUR OTHER SERVICES
  Outdor Catering
  Birthday Parties
  Bridal Showers
  Weddings
  Workshops
  Conferences
  Office delivery





          ALL PRICES ARE INC

        THANK YOU FOR VISITING H
#### Column 2
ndi & Come Again


 S





CLUSIVE OF V.A.T

 HAANDI & COME AGAIN


## Naguru — restaurant food

Source: `FINAL FOOD MENU NAGURU.pdf`. Draft branch availability: this branch only.


### Naguru — source page 1

   Welcome to Haandi Restaurant
      Where Every Dish Tells a Story


  Step into Haandi Restaurant, where flavors come alive! We invite
  you to embark on a culinary adventure, blending authentic Indian
   spices with innovative Indo-Chinese creations. From the sizzling
  aromas of our tandoor to the rich, comforting curries, each bite is
   crafted with passion and the finest ingredients. Whether you're
    craving the warmth of a traditional biryani, the spice of a fiery
     curry, or the sweetness of our delectable desserts, we've got
              something to excite every taste bud!


         Our Fresh Food Promise
     At Haandi Restaurant, we pride ourselves on serving only the
   freshest food. Every dish is carefully crafted using the finest ingre-
     dients, ensuring that each bite is full of flavor and authenticity.


    Famous for Indian Sweets & Bakery
   Haandi Restaurant is particularly famous for its delectable Indian
 sweets and bakery items. From the rich sweetness of Gulab jamun to
   the delicate flavors of freshly baked cakes, our sweets and bakery
             treats are a true delight for every dessert lover.

Dive into our menu and discover the magic
  Bold Flavors, Unforgettable Memories.
### Naguru — source page 2

#### Column 1
Delicious Soups & Broths

Cream of Tomato Soup
A smooth and velvety blend of ripe tomatoes,
finished with a touch of cream.
20,000/=

Cream of Mushroom Soup
A rich and creamy blend of earthy mushrooms,
simmered to perfection for a comforting, velvety
soup.
20,000/=

Lemon Coriander Soup
A light, fragrant broth infused with fresh lemon
and coriander, offering a zesty, refreshing flavor
in every spoonful.
20,000/=

Veg Manchow Soup
A warming, flavorful soup with finely chopped
vegetables, a rich, spicy broth, and a crispy
noodle topping that brings crunch in every
spoonful.
20,000/=

Hot and Sour Soup Veg
A perfect balance of spicy heat and tangy flavor
with, fresh vegetables, and aromatic spices in a
savory broth.
20,000/=

Manchow Chicken Soup
A hearty and flavorful Chinese-inspired soup wit
tender chicken, vegetables, and crispy fried
noodles in a spicy, savory broth.
20,000/=

Hot and Sour Chicken Soup
A perfect balance of spicy heat and tangy flavor
with tender chicken, fresh vegetables, and
aromatic spices in a savory broth.
20,000/=
#### Column 2
    Healthy Salad Bowl

     Greek Salad
     A light, crisp salad with cucumbers,
      tomatoes, feta cheese, and fresh
       herbs, tossed in a flavorful olive oil
       dressing for a refreshing bite.
    22,000/=

y     Green Salad
     A refreshing mix of cucumber,
      tomatoes, carrots, onion, lemon,
      green chili.
    12,000/=


     Kachumbari Salad
     A vibrant East African salad featuring
      tomatoes, onions, and cucumbers,
      seasoned with cilantro, lime, and
      a touch of heat from chili, creating
      a perfect balance of flavors.
    12,000/=

    Creamy Coleslaw Salad
        All time favourite
r,   20,000/=





th





r,
### Naguru — source page 3

#### Column 1
Appetizer

Plain Chips
Crispy, golden-brown potato chips,
perfectly seasoned for a light and satis-
fying snack.
15,000/=

Mixed Vegetable Bhajias
A delicious combination of fresh vegeta-
bles, seasoned with aromatic spices and
deep-fried to crispy perfection, offering
a flavorful bite in every piece.
28,000/=

Masala Chips
Crispy, golden potato chips tossed in a
flavorful blend of aromatic spices, offer-
ing a zesty and tangy twist on a classic
snack.
28,000/=

Crispy Fried Chilly Garlic
Chips ( Mild )
Golden, crispy potato chips seasoned
with a fiery blend of aromatic garlic,
offering a perfect balance of heat and
flavor in every bite.
30,000/=

Crispy Fried Chilly Garlic
Chips ( Spicy )
Golden, crispy potato chips seasoned
with a fiery blend of chili and aromatic
garlic, offering a perfect balance of heat
and flavor in every bite.
30,000/=
#### Column 2
Peanut Masala
Crispy peanuts seasoned with a flavorful
mix of spices, including tangy and spicy
notes, perfect for a savory, satisfying
treat.
18,000/=

Masala Papad Roasted
Crisp roasted pappadums seasoned
with a fragrant mix of spices, creating a
perfect combination of crunch and bold
flavor.
5,000/=

Masala Papad Fried
Crisp roasted pappadums seasoned
with a fragrant mix of spices, creating a
perfect combination of crunch and bold
flavor.
5,000/=

Plain Papad Roasted
3,000/=

Plain Papad Fried
3,000/=

Plain Peanut
8,000/=
### Naguru — source page 4

#### Column 1
Tasty Chaat Delights

Aloo Chaat
A delicious Indian street food made with
crispy fried potatoes, topped with tangy
tamarind and mint chutneys, and seasoned
with aromatic spices like cumin and Chaat
masala. Garnished with fresh onions,
coriander, and a touch of yogurt.
28,000/=

Samosa Chaat
A mouthwatering fusion of crispy, golden
samosas broken into bite-sized pieces and
topped with tangy tamarind chutney, mint
chutney, yogurt, and a blend of aromatic
spices. Garnished with fresh cilantro, onions,
and sev, it’s a perfect balance of crunch,
spice.
28,000/=

Dahi Vada
Soft, fluffy lentil dumplings soaked in chilled
yogurt and drizzled with tangy tamarind and
mint chutneys. Topped with a sprinkle of
Chaat masala, cumin powder, and fresh
coriander.
22,000/=

Papdi Chaat
Crispy Papdi (fried dough crackers) topped
with creamy yogurt, tangy tamarind chutney,
and spicy mint chutney. Garnished with fresh
onions, pomegranate seeds, and a sprinkle of
Chaat masala, Papdi Chaat offers a perfect
mix of crunchy, tangy, and spicy flavors in
every bite.
20,000/=
#### Column 2
Veggie Temptations

Paneer Tikka Tandoori
Cubes of soft paneer marinated in a
rich blend of yogurt and aromatic
spices, then grilled to perfection in a
traditional tandoor.
 Half 28,000/=
 Full 35,000/=


Haryali Paneer Tikka
Soft paneer cubes marinated in a
fragrant blend of fresh herbs, mint,
cilantro, and spices, then grilled to
perfection.
 35,000/=

Paneer Malai Tikka
Soft paneer cubes marinated in a rich,
creamy blend of yogurt, cheese, and
mild spices, then grilled to perfection.
 35,000/=

Paneer Salt and Pepper
A delightful simple dish
featuring soft golden-brown paneer
seasoned with a perfect balance of salt
and freshly grounded black pepper.
 32,000/=

Haandi Special Chilly Paneer
Soft, crispy cubes of paneer cooked
with crunchy onions and vibrant
capsicum (bell peppers) in a bold,
tangy, home-made spicy sauce.
 35,000/=
### Naguru — source page 5

#### Column 1
Chilly Paneer Chinese Style
Crispy cubes of paneer stir-fried with
onions, capsicum, and a blend of bold
Chinese sauces, including soy sauce,
vinegar, and chili sauce. Infused with
aromatic garlic, ginger.
 35,000/=

Tandoori Malai Broccoli
Fresh broccoli florets marinated in a
rich, creamy blend of yogurt, cheese,
and aromatic spices, then grilled to
perfection in a traditional tandoor.
 35,000/=

Veg Manchurian Dry
Bite-sized vegetable balls made from
finely chopped mixed vegetables,
seasoned with spices, and deep-fried
until golden and crispy. These crispy
fritters are then tossed in a zesty,
tangy, and slightly spicy Manchurian
sauce,
 32,000/=

Crispy Veg Salt and Pepper
A delightful mix of crispy, battered
fried vegetables like cauliflower,
beans, zucchini, carrots, broccoli, bell
peppers, seasoned with a perfect
balance of salt, cracked black pepper,
and aromatic spices. Stir-fried to
golden perfection.
 33,000/=

Chilly Corn
Crispy golden corn kernels tossed in a
flavorful mix of spicy chili sauce,
vibrant bell peppers, and a hint of
garlic.
 35,000/=
#### Column 2
Chilly Mushroom
Tender, juicy mushrooms coated in a light
crispy batter, stir-fried with a zesty
chili-garlic sauce, crunchy bell peppers, and
a medley of spices.
 35,000/=


Mushroom Salt and Pepper
Crispy, golden-fried mushrooms seasoned
with a perfect blend of salt, cracked black
pepper, and aromatic spices. Tossed with
sautéed onions, garlic, and chili for a burst
of flavor in every bite.
 35,000/=


Butter Garlic Mushroom
Succulent mushrooms sautéed to perfec-
tion in rich, golden butter and infused with
the aromatic flavors of freshly minced
garlic. Finished with a hint of herbs.
 35,000/=


Paneer Mint Burra
Chef’s Special
 38,000/=

Tandoori Mushroom
Tender mushroom marinated in rich spicy
yoghurt infused with aromatic tandoori
masala and grilled to perfection.
 35,000/=

Tandoori Alo Nzakat
Chef’Special.
 34,000/=

Honey Chili Potato
Crispy potato fingers tossed in a perfect
blend of honey, chilli and aromatic spices.
 28,000/=
### Naguru — source page 6

#### Column 1
Soya Chaap            S
Afghani Malai Soya Chaap                           T
Tender Soya Chaap Marinated In Rich                                         J
Creamy Blend Of Yoghurt, Cashews Adn                                      a
Aromatic Spices.                                                         t
 38,000/=                                   t

Tandoori Soya Chaap
Succulent Soya Chaap Marinated In
Flavourful Mix Of Yoghurt Spices And
Herbs.
 35,000/=               C
                                   S
                                        c
Soya Chilly Chaap                 c                                   o
Juicy Soya Chaap Tossed In Spicy                                                         t
Tangy Indo-chinese Sauce With Bell
Pepper And Onions.
 35,000/=
                         C
Chhaani Soya Chaap                            I
Soft soya fillet marinated in a fragrant                         M
blend of fresh herbs, mint, cilantro, and                                    n
spices, then grilled to perfection.                                     y
 35,000/=                  G

Hara Bhara Kebab
A delicious vegetarian delight, Hara     C
Bhara Kebab features a blend of fresh                                   E
spinach, peas, and aromatic herbs.                                C
 32,000/=                                                    i                                   o
                                                         t
Soya Chaap Platter
A Combination Of 3 Flavours Of Soya
Chaap.
                         C
 45,000/=                     S
                         M
Veg Platter                                       t
Vegetarian delight including Hara Bhara Kebab,    o
Malai Broccoli, Paneer Tikka, Veg Manchurian,      c
Aloo Nazakat, Tandoori Pineapple.
 45,000/=
#### Column 2
Sizzling Non-Veg Starters

Tandoori Chicken
Juicy chicken marinated in a blend of yogurt,
aromatic spices, and a touch of tangy citrus,
then slow-roasted to perfection in a tradi-
tional tandoor.
 Half - 35,000/=
 Full - 60,000/=


Chicken Tikka Dry Tandoori
Savor the timeless taste of tender, boneless
chicken, marinated in a luxurious mix of
creamy yogurt, vibrant spices, and a splash
of citrus. Roasted to smoky perfection in a
traditional tandoor.
 35,000/=


Chicken Malai Tikka
Indulge in the rich, creamy flavors of Chicken
Malai Tikka. Succulent chicken pieces mari-
nated in a luscious blend of fresh cream,
yogurt, mild spices, and fragrant herbs.
Grilled to perfection in a tandoor.
 38,000/=

Chicken Angara Spicy
Experience the bold and smoky flavors of
Chicken Angara. Tender chicken marinated
in a rich blend of spices, herbs, and a touch
of charcoal, then grilled to perfection in a
tandoor.
 40,000/=

Chingari Murgh Tikka
Spice up your taste buds with Chingari
Murgh Tikka, a fiery and flavorful dish where
tender chicken is marinated in a zesty blend
of bold spices, smoky charcoal, and a hint of
chili.
 38,000/=
### Naguru — source page 7

#### Column 1
Haryali Chicken Tikka
Boneless pieces of chicken marinated
in a fragrant blend of fresh herbs,
mint, cilantro, and spices, then grilled
to perfection.
 35,000/=

Achari Chicken Tikka
A mouthwatering fusion of tangy and
spicy, Achari Chicken Tikka features
tender chicken marinated in a unique
blend of pickling spices like mustard,
fennel, and nigella seeds. Grilled to
perfection.
 35,000/=

Chicken Kalimirch Tikka Dry
Savor the smoky and peppery good-
ness of Chicken Kalimirch Tikka Dry.
Marinated in a blend of black pepper,
yogurt, and aromatic spices, this
tender chicken is grilled to perfection
in a tandoor.
 38,000/=


Chef Special Chicken Mint
Bura
A unique creation from our chef.
Tossed with a mint and ginger.
 40,000/=


Chilly Chicken Dry
Crispy chicken pieces tossed in a
fiery, tangy sauce with fresh chili,
garlic, and a touch of soy for depth.
Stir-fried to perfection.
 35,000/=
#### Column 2
Chicken Lollipop
Juicy chicken wings expertly marinated
in a savory blend of spices, then
deep-fried to golden perfection, creat-
ing a crispy, flavorful exterior.
 30,000/=

Chicken Drums of Heaven
Crispy, golden-fried chicken drumsticks
coated in a crunchy exterior. Tossed
with sautéed onions and capsicum for
an added crunch and vibrant touch.
 35,000/=


Honey Glazed Chicken Wings
Chef’s Special.
 35,000/=

Chicken Seekh Kebab
Finely minced chicken, infused with a
blend of aromatic spices, herbs, and a
touch of cream, shaped onto skewers
and grilled to perfection. These succu-
lent kebabs have a smoky char on the
outside, while remaining tender and
juicy inside.
 32,000/=


Kung Pao Chicken
Tender chicken pieces stir-fried with
peanuts, bell peppers, and dried chilies
in a savory and spicy sauce.
 35,000/=

Sweet and Sour Chicken
Crispy chicken pieces tossed in a tangy,
sweet, and slightly sour sauce made
with pineapple, vinegar, and bell pep-
pers.
 40,000/=
### Naguru — source page 8

#### Column 1
Haandi Special Goat Ribs
Tender, succulent goat ribs
slow-cooked to perfection in a tradi-
tional Haandi pot, infused with a rich
blend of spices and herbs. Juicy,
flavorful, and fall-off-the-bone deli-
cious, this dish is a true masterpiece
of culinary craftsmanship.
 Half - 35,000/=
 Full - 60,000/=


Mutton Seekh Kebab
Juicy minced mutton delicately spiced
with aromatic herbs and seasonings,
shaped onto skewers and grilled to
perfection. These tender, flavorful
kebabs offer a smoky char on the
outside while remaining succulent and
juicy on the inside.
 33,000/=

Schezwan Chili Lamb
Tender lamb pieces stir-fried with
bold Sichuan spices, garlic, and green
chilies.
 35,000/=

Non-Veg Platter
A perfect combination of mix grill,
meat and sea food.
 Half - 55,000/=
 Full - 90,000/=

Non - Veg Kebab Platter
 65,000/=
#### Column 2
Tandoori Fish Tikka
Smoky flavors of Tandoori Fish
Tikka. Tender pieces of fish marinat-
ed in a rich blend of yogurt, aromat-
ic spices, and a hint of citrus, then
cooked to perfection in a traditional
tandoor.
 38,000/=

Haryali Fish Tikka
Delight in the delicate, smoky flavors
of Tandoori Fish Tikka. Tender pieces
of fish marinated in a rich blend of
yogurt, aromatic spices, and a hint of
citrus, then cooked to perfection in a
traditional tandoor.
 38,000/=


Chilly Fish Dry
Crispy, golden-fried fish tossed in a
fiery, tangy chili sauce with hints of
garlic, ginger, and a blend of aromatic
spices. Stir-fried with vibrant bell pep-
pers and onions.
 35,000/=

Fish Salt and Pepper
Tender fish fillets lightly battered and
fried to a crispy golden perfection,
then seasoned with a perfect balance
of salt, cracked black pepper, and a
touch of aromatic spices. Stir-fried
with fresh onions and bell peppers.
 35,000/=


Amsitsari Fish Fry
 38,000/=

Crispy Ftried Fish Fillet
 38,000/=
### Naguru — source page 9

#### Column 1
Tandoori Prawns
Succulent prawns marinated in a blend of
rich yogurt, fragrant spices, and a touch
of citrus, then grilled to perfection in a
traditional tandoor.
90,000/=


Golden Fried Prawns
Crispy, golden-battered prawns,
perfectly fried to achieve a crunchy, light
exterior with a succulent, juicy center.
These bite-sized prawns are seasoned to
 perfection.
 90,000/=

Chilly Prawns
Juicy prawns stir-fried in a spicy, tangy
chili sauce with a burst of garlic, ginger,
and fresh vegetables. The dish combines
a perfect balance of heat, savory
richness, and a hint of sweetness,
offering a fiery kick with every bite.
 75,000/=

Prawns Salt and Pepper
Tender prawns lightly sautéed with just
the right amount of salt, cracked black
pepper, and aromatic spices, then tossed
with crunchy bell peppers and onions.
 75,000/=
#### Column 2
Veg Main Course

Paneer Tikka Masala
Crispy, grilled chunks of paneer
marinated in a fragrant blend of
spices, yogurt, and herbs, then
simmered in a rich, creamy
tomato-based gravy.
 35,000/=

Paneer Makhani
Soft, melt-in-your-mouth cubes
of paneer simmered in a rich,
creamy tomato-based gravy
infused with aromatic spices
and a touch of butter.
 35,000/=


Paneer Butter Masala
Soft, golden cubes of paneer
cooked in a rich and creamy
butter-based gravy, infused
with a perfect blend of aromatic
spices and tomatoes.
 35,000/=


Corn Paneer Masala
A delightful combination of
tender paneer and sweet corn
simmered in a rich, flavorful
masala sauce made with fresh
tomatoes, onions, and aromatic
spices.
 35,000/=
### Naguru — source page 10

#### Column 1
Paneer Methi Chaman
A delightful vegetarian dish featuring soft
cubes of paneer cooked with fresh fenu-
greek leaves (Methi) and a blend of aro-
matic spices.
 35,000/=

Palak Paneer
Soft cubes of paneer cooked in a rich,
smooth spinach gravy, spiced delicately
with a blend of aromatic herbs and
spices.
 35,000/=


Stuffed Tomato Paneer
Juicy, ripe tomatoes hollowed out and
filled with a flavorful mixture of paneer,
herbs, and spices, then gently cooked to
perfection. The tender, spiced filling
infuses the tomatoes with a rich, aromatic
taste.
 40,000/=


Paneer Burji
Crumbling soft paneer cooked with
onions, tomatoes, and a blend of aromat-
ic spices, Paneer Burji is a savory,
flavorful dish with a delightful mix of
textures.
 35,000/=


Kadhai Paneer
Spicy coated cheese cooked with bell
pepper and onions and aromatic spices.
 35,000/=
#### Column 2
Palak Corn Masala
A vibrant and healthy dish combining
tender corn kernels with fresh
spinach, cooked in a rich, spiced
masala sauce.
 35,000/=

Mix Veg Kolhapuri
A spicy and flavorful dish from the
heart of Kolhapur, Mix Veg Kolhapuri
features a medley of seasonal
vegetables cooked in a fiery, tangy
masala made with freshly ground
Kolhapuri spices.
 34,000/=

Mix Vegetables (With Paneer)
A colorful medley of seasonal
vegetables cooked to perfection in a
mild, aromatic masala, offering a
healthy and satisfying combination of
textures and flavors.
 32,000/=

Aloo Gobi Adhkari
A delightful twist on the classic, Aloo
Gobi Adhikari features tender
potatoes and cauliflower cooked with
a zingy ginger-based gravy, spiced
with aromatic herbs and fresh ground
spices.
 32,000/=

Malai Kofta (Brown Gravy)
Soft, melt-in-your-mouth koftas made
from a creamy mixture of paneer and
vegetables, gently simmered in a
luxurious, spiced brown gravy.
 32,000/=
### Naguru — source page 11

#### Column 1
Shahi Palak Kofta
Delicate, spinach-filled koftas made
from fresh greens, paneer, and mild
spices, simmered in a rich, creamy
gravy made with cashews, cream, and
aromatic spices.
 35,000/=

Matter Mushroom
Mushrooms and green peas cooked in
a rich spicy gravy.
 32,000/=

Mushroom Palak Masala
Mushroom cooked with spinach in a
flavorful spiced gravy.
 35,000/=

Baingan Bharta
Spoked mashed eggplants coked with
tomatoes, onions and spices.
 40,000/=
Bhindi Do Pyaza
Okra sauteed with onions, tomatoes
and aromatic spices.
 40,000/=

Soya Chaap Butter Masala
Tender soya chaap cooked in a rich
buttery tomato gravy.
 35,000/=

Kadhai Soya Chaap
Soya chaap cooked with bell pepper
onions and whole spices.
 35,000/=
#### Column 2
Amritsari Chole Masala
A rich and aromatic dish, Amritsari
Chole Masala features tender chick-
peas cooked in a robust blend of
spices, tomatoes, and onions, creating
a thick, flavorful gravy. Infused with the
unique flavors of Amritsari masala.
30,000/=


Mushroom Hara Piyaza
A delightful vegetarian dish where
tender mushrooms are sautéed with
fresh, crisp green onions (hara piyaza),
cooked in a fragrant blend of spices.
35,000/=

Kajju Curry
A luxurious curry made with roasted
cashews simmered in a rich, creamy
tomato-based gravy, infused with
aromatic spices and a touch of cream.
40,000/=


Dal Makhani
A creamy, indulgent dish made with
black lentils and kidney beans, slowly
simmered to perfection and enriched
with butter, cream, and a blend of
aromatic spices.
30,000/=

Yellow Dal Tadka
A classic comfort food, Yellow Dal
Tadka features split yellow lentils
cooked to perfection and tempered
with a fragrant tadka of ghee, cumin,
garlic, and a hint of red chili.
28,000/=
### Naguru — source page 12

#### Column 1
CHINESE MENU

Vegetable Manchurian Gravy
Soft, fried vegetable balls in a spicy,
savory sauce made with soy sauce, chili
paste, and aromatic spices.
35,000/=

Types of Fried Rice

Veg Fried Rice
25,000/=
Chilli Garlic Fried Rice
25,000/=

Burnt Garlic Fried Rice
28,000/=

Egg Fried Rice
25,000/=

Chicken Fried Rice
28,000/=

Types of Noodles

Veg Chow mein
25,000/=

Chili Garlic Noodles Veg
26,000/=

Chili Garlic Noodles Chicken
28,000/=

Chicken Chow mein
28,000/=
#### Column 2
Non Veg Main Course

Butter Chicken
A rich and creamy classic! Tender chick-
en pieces cooked in a velvety toma-
to-based curry, infused with butter,
cream, and a blend of aromatic Indian
spices. Perfectly paired with naan or
rice.
 Boneless 36,000/=

With bone 38,000/=


Chicken Tikka Masala
Succulent chicken tikka pieces simmered
in a luscious tomato-based curry,
flavored with creamy yogurt, fresh
herbs, and a harmonious blend of spices.
38,000/=


Chicken Nizami
A royal delicacy! Juicy chicken cooked in
a rich, creamy gravy made with
cashews.
40,000/=
### Naguru — source page 13

#### Column 1
Kadhai Chicken
A flavorful and hearty dish! Tender
chicken cooked with fresh bell pep-
pers, onions, and tomatoes in a
robust blend of spices.
 Boneless 35,000/=

With bone 38,000/=


Chicken Malai Korma
A creamy and indulgent treat! Suc-
culent chicken cooked in a rich,
velvety sauce made with cream,
cashews, and aromatic spices,
finished with a touch of rose water
and saffron for a royal flavor.
40,000/=


Jeera Chicken
A flavorful delight! Tender chicken
pieces sautéed with roasted cumin
seeds, onions, and tomatoes,
enhanced with a blend of earthy
spices for a rich and aromatic taste.
Perfectly pairs with naan, roti, or
steamed rice.
38,000/=


Chicken Curry
A timeless classic! Tender chicken
simmered in a flavorful blend of
onions, tomatoes, and aromatic
spices.

 Boneless 35,000/=

With bone 38,000/=
#### Column 2
Punjabi Dhaba Chicken (Bone-
less)
A rustic and hearty dish straight from
the roadside dhabas of Punjab! Bone-
less chicken pieces cooked in a
robust, spicy gravy made with toma-
toes, onions, and a medley of Punjabi
spices.
40,000/=

Punjabi Dhaba Chicken ( With
Bone )
An authentic Punjabi favorite! Juicy,
bone-in chicken pieces slow-cooked in
a rich and spicy gravy made with
onions, tomatoes, ginger, garlic, and
bold Punjabi spices.
38,000/=

Fish Curry Goan Style
Fresh, tender fish fillets simmered in a
tangy and flavorful gravy made with
tomatoes, onions, tamarind, and a
blend of aromatic goan style.
 38,000/=


Fish Tikka Masala
Tender pieces of fish marinated in
yogurt and spices, then grilled to
perfection and simmered in a rich,
creamy tomato-based sauce. Flavored
with a blend of aromatic spices and a
hint of smokiness.
40,000/=

Coconut Fish Curry
Tender fish cooked in a rich spicy
coconut curry.
 38,000/=
### Naguru — source page 14

#### Column 1
Mutton Rogan Josh
A Kashmiri specialty! Tender mutton
pieces slow-cooked in a fragrant, rich
gravy made with yogurt, aromatic
spices, and a delicate blend of Kashmiri
herbs.
Boneless 38,000/=

With bone 40,000/=


Keema Mutton
A flavorful, comforting dish made with
minced mutton cooked with onions,
tomatoes, and a blend of aromatic
spices.
35,000/=


Kadai Mutton with bone
Succulent muttton pieces with
bone,slow cooked with a blend of aro-
matic spices.
40,000/=

Tawa Mutton Khada Masala
with bone
Mutton cooked on a tawa with whole
spices.
40,000/=
#### Column 2
RICE AND BIRYANI

   All Biryani is served with
      Gravy or Raita

Steamed Rice
Fluffy and perfectly cooked, our
steamed rice is a simple yet essential
side dish.
18,000/=

Jeera Rice
Fragrant basmati rice cooked with
roasted cumin seeds.
22,000/=

Vegetable Pulao
A colorful and aromatic rice dish
made with basmati rice, mixed vege-
tables, and a blend of spices like
cumin, cardamom, and bay leaves.
Lightly seasoned and cooked to
perfection.
25,000/=

Onion Masala Pulao
Fragrant basmati rice cooked with
carmalized onions and a blend of
aromatic spices.
25,000/=

Vegetable Biryani
A fragrant, flavorful rice dish made
with mixed seasonal vegetables,
basmati rice, and a blend of aromatic
spices.
28,000/=

Paneer Biryani
Aromatic basmati rice with soft
paneer cubes and infused with
fragrant spices.
32,000/=
### Naguru — source page 15

#### Column 1
Soya Chaap Biryani
Fluffy basmati rice layered with marinat-
ed sya chaap and fragrant spices.
35,000/=

Chicken Biryani
A fragrant and flavorful rice dish made
with tender chicken marinated in aro-
matic spices and slow-cooked with
basmati rice, saffron, and fresh herbs.
 32,000/=

Mutton Biryani
A royal and aromatic dish featuring
tender mutton pieces marinated in a
blend of fragrant spices, slow-cooked
with basmati rice, saffron, and fresh
herbs.
 32,000/=

Chicken Tikka Biryani
Tne der chicken tikka pieces cooked
with basmati rice.
 35,000/=

Tandoori Goat Ribs Biryani
Chef’s Special.
 50,000/=

Prawns Biryani
Succulent prawns marinated in aromatic
spices and layered with basmati rice,
cooked together with saffron and fresh
herbs.
 80,000/=
#### Column 2
INDIAN BREADS

Plain Naan
A soft and fluffy traditional Indian
flatbread made with refined flour,
baked in a tandoor oven.
7,000/=

Butter Naan
A classic naan brushed generously
with butter after baking, making it
rich and flavorful.
7,000/=

Garlic Naan
A flavor-packed naan infused with
roasted garlic and herbs.
9,000/=


Cheese Naan
Stuffed with a melty cheese filling,
this naan brings a cheesy indul-
gence to the table.
15,000/=

Chilli Cheese Naan
18,000/=

Keema Naan
A unique naan stuffed with spiced
minced meat (keema), offering a
rich, savory flavor.
30,000/=


Aloo Naan
This naan is stuffed with a spiced
mashed potato filling, giving it a
comforting, earthy flavor.
15,000/=
### Naguru — source page 16

#### Column 1
Methi Naan
Infused with fenugreek leaves
(Methi), this naan has a slightly
bitter yet aromatic flavor.
 9,000/=

Turbo Cheese Naan
A decadent and indulgent naan
stuffed with a rich blend of melted
cheese and seasoned with a hint of
herbs and spices.
22,000/=


Turbo Naan without cheese
A decadent and indulgent naan
stuffed with a rich blend of melted
cheese and seasoned with a hint of
herbs and spices.
18,000/=

Paneer Naan
15,000/=


Chilli Naan
8,000/=


Chilli Garlic Naan
 9,000/=
#### Column 2
Lachha Paratha
A flaky, multi-layered paratha made
with whole wheat flour, rolled out
into layers and cooked until crispy
and golden.
10,000/=

Pudhina Prantha
10,000/=

Tandoori Roti
A whole wheat Indian flatbread,
cooked in the tandoor oven to give
it a smoky flavor and crispy tex-
ture.
 Plain 5,000/=

With Butter 6,000/=


Tawa Roti with butter
A soft, unleavened flatbread
cooked on a tawa (griddle), offer-
ing a slightly crispy texture .
6,000/=

Tawa Roti plain
A soft, unleavened flatbread
cooked on a tawa (griddle), offer-
ing a slightly crispy texture on the
outside while remaining soft and
tender inside.
5,000/=

Rumali Roti
A thin, soft, and delicate flatbread
made with refined flour, rolled out
into a large, thin circle and cooked
on a tandoor or open flame.
10,000/=
### Naguru — source page 17

#### Column 1
DESSERTS


Gulab Jamun
Soft, round dumplings made from milk
solids, deep-fried to golden perfection,
and soaked in a fragrant sugar syrup.
15,000/=


Kulfi Mango or pistachio
A traditional Indian ice cream made
with reduced milk, sugar, and flavor-
ings like mango, pistachio.
18,000/=

Rasmalai
Soft, spongy discs of chhena (cottage
cheese) soaked in a sweet, flavored
milk syrup made with cardamom, saf-
fron, and garnished with pistachios and
almonds.
15,000/=


Choice of ice Cream
Mango, Strawberry, Chocolate, Vanilla
1 Scoop 5,000/=
3 Scoop 12,000/=
Mixed 15,000/=



  ALL PRICES INCLU
#### Column 2
      Chocolate Bownie with
      Icecream
    25,000/=

       Sizzling Chocolate brownie
      with Icecream
    30,000/=





UDE V.A.T


## Supplementary menu source records

Branch scope must follow the review table above. All prices below are UGX. Keep sizes/weights as selectable variants, not hundreds of separate cards.


### Pizza

Source: `FINAL PIZZA MENU A4 with corrections.pdf`. Layout-preserving source transcription:

```text
Haandi Restaurant




         Welcome to a World of Flavor
  At Haandi Restaurant, we bring you the best of both
 worlds with our signature Indian-inspired pizzas. From
rich tandoori flavors to classic cheese bursts, our pizzas
  are crafted with the finest ingredients, giving you an
 authentic & unique taste you won’t find anywhere else.


    Preparation Time 20 - 25 minutes




              Explore Our Menu
Veg Pizzas | Non-Veg Pizzas | Indian Fusion Flavors


--- Source page break ---

  Vegetarian Pizzas                                           Large      Medium
Margherita Pizza                                              28,000/=   24,000/=
Classic pizza topped with rich tomato sauce, fresh mozza-
rella cheese and basil

Haandi House Pizza                                            35,000/=   30,000/=
A delicious mix of onions, bell peppers, sweet corn, and
olives, topped with mozzarella cheese

Mushroom and Corn Pizza                                       35,000/=   30,000/=
Delicious mix of mushroom and sweet corn topped with
mozzarella cheese

Paneer Tikka Pizza                                            36,000/=   30,000/=
Oven-baked pizza topped with marinated paneer cubes,
onions, bell peppers, and a blend of Indian spices

Spicy Peri-Peri Paneer Pizza                                  35,000/=   30,000/=
Crispy crust topped with spicy peri-peri paneer, jalapeños,
red onions, and mozzarella cheese

Paneer & Corn Pizza                                           35,000/=   30,000/=
A cheesy delight with grilled paneer, sweet corn, and a
touch of black pepper

Veggie Overload Pizza                                         35,000/=   30,000/=
A wholesome mix of zucchini, bell peppers, mushrooms,
cherry tomatoes, olives

Mediterranean Pizza                                           40,000/=   35,000/=
A flavorful mix of sun-dried tomatoes, olives, feta cheese,
bell peppers, and fresh basil




Haandi House Unique Pizza


--- Source page break ---

Non-vegetarian Pizzas                                           Large      Medium
BBQ Chicken Pizza                                               40,000/=   35,000/=
Juicy grilled chicken tossed in smoky BBQ sauce, topped
with onions and bell peppers

Chicken Tikka Pizza                                             40,000/=   35,000/=
Oven-roasted pizza topped wih spicy chicken tikka pieces,
onions and capsicum

Peri-Peri Chicken Pizza                                         40,000/=   35,000/=
Spicy peri-peri marinated chicken jalapenos, onions, olives
and cherry tomatoes

Butter Chicken Pizza                                            40,000/=   35,000/=
A unique twist with creamy butter chicken gravy, shredded
tandoori chicken and fresh coriander

Mix Grill Pizza                                                 42,000/=   36,000/=
Combination of grilled chicken goat meat with onions, green
pepper, coriander and cheese

Chicken Supreme Pizza                                           40,000/=   35,000/=
Loaded pizza with grilled chicken, mushrooms, onions, and
capsicum, topped with extra cheese.

Mughlai Chicken Pizza                                           40,000/=   35,000/=
A royal delight of slow-cooked Mughlai-style chicken, onions,
and saffron-infused creamy sauce

Keema Mutton Pizza                                              40,000/=   35,000/=
Spiced minced mutton keema, green chilies, onions, and
cheese, topped with a drizzle of tangy tomato sauce.

CHICKEN HAWAIIAN PIZZA – Haandi                                 40,000/=   35,000/=
Special

TOPPINGS
Extra Pizza Dip                                                 3,000/=
Extra Cheese                                                    5,000/=
Extra Chicken                                                   6,000/=
Extra Veggies                                                   5,000/=


Dine-In | Takeaway | Delivery
Call to Order: 0701411221
Haandi Restaurant, Kampala


              Don’t miss out—double the pizza, double the happiness!

                      ALL PRICES ARE INCLUSIVE OF V.A.T

              ONCE AN ORDER IS PLACED IT CANNOT BE CANCELED


--- Source page break ---



--- Source page break ---
```


#### Pizza entries visible in artwork but missing from the PDF text layer

| Vegetarian pizza | Large UGX | Medium UGX | Description / review note |
|---|---:|---:|---|
| Jalapeño & Corn Pizza | 35,000 | 30,000 | Jalapeño and corn topping; use source artwork for final wording. |
| Mushroom Pizza | 35,000 | 30,000 | Mushroom topping; distinct from Mushroom and Corn Pizza. |
| Haandi House Unique Pizza | 35,000 | 30,000 | Spiced paneer tikka, mushrooms, bell peppers, olives, cherry tomatoes, jalapeños, mozzarella and house masala. Name already appears alone in extracted text; merge it into this entry. |
| Chilli Paneer Pizza | 35,000 | 30,000 | Crispy fried paneer, chillies, bell peppers, onions, tomatoes and mozzarella. |


### Dosa & South Indian

Source: `FINAL DOSA MENU (3).pdf`. Layout-preserving source transcription:

```text
Haandi Restaurant proudly presents its Dosa Delights, a celebra-
 tion of authentic South Indian flavors, crafted with tradition and
 passion. Each dosa is made from our freshly fermented rice and
    lentil batter, ensuring the perfect balance of crispiness and
   softness. From the timeless Masala Dosa to innovative fusion
creations, our dosa menu offers something for everyone whether
         you crave classic flavors, spicy delights, or cheesy
                              indulgence.




    All dishes come with chutney and sambar


--- Source page break ---

Classic Dosa (Plain)                                           25,000/=
Crispy, golden-brown thin crepe made from fermented
rice and lentil batter, served with a side of coconut
chutney and tangy sambar

Masala Dosa                                                    30,000/=
Large, crispy dosa filled with a spiced mashed potato mix-
ture, served with coconut chutney and sambar.

Cheese Dosa                                                    34,000/=
Crispy dosa generously stuffed with melted cheese,
served with tangy sambar and coconut chutney.

Paneer Dosa                                                    34,000/=
A crispy dosa filled with cottage cheese and a blend of
Indian spices, served with a side of chutney and sambar.

Mysore Dosa(Plain)                                             28,000/=
A crispy dosa spread with a spicy red chutney, filled with a
tangy potato filling, and served with coconut chutney and
sambar.


Mysore Dosa(Masala)                                            30,000/=
A crispy dosa spread with a spicy red chutney, filled with a
tangy potato filling, and served with coconut chutney and
sambar.

Onion Rawa Dosa (Plain)                                        30,000/=
A semolina-based dosa topped with sautéed onions, curry
leaves, and mustard seeds, served with sambar and chut-
neys.

Onion Rawa Dosa (Masala)                                       35,000/=
A semolina-based dosa topped with sautéed onions,
curry leaves, and mustard seeds, served with sambar
and chutneys.

Spinach & Cheese Dosa                                          32,000/=
A crispy dosa filled with sautéed spinach and a blend of
cheese, served with coconut chutney and sambar.

Szechuan Dosa                                                  35,000/=
Signature dosa filled with veggie, noodles and sauce


--- Source page break ---

Chana Masala Dosa                                                35,000/=
A crispy dosa filled with spicy, tangy chickpea curry (chana
masala), served with a side of coconut chutney and sambar

Garlic Butter Dosa                                               30,000/=
A dosa cooked with garlic-infused butter, sprinkled with fresh
coriander, and served with a side of coconut chutney and
sambar.

Onion Uttapam                                                    30,000/=
A thick uttapam topped with finely chopped onions, green
chilies, and fresh coriander, served with tangy sambar and co-
conut chutney.

Tomato Uttapam                                                   30,000/=
A thick uttapam generously topped with fresh tomatoes,
green chilies, and a sprinkle of herbs, served with coconut
chutney and sambar.

Vegetable Uttapam                                                32,000/=
A delicious uttapam topped with a colorful mix of finely
chopped bell peppers, onions, tomatoes, and green chilies,
served with coconut chutney and sambar.

Cheese Uttapam                                                   32,000/=
A thick uttapam generously topped with melted cheese and a
hint of black pepper, served with coconut chutney and
sambar.

Chili Garlic Uttapam                                             32,000/=
A spiced uttapam infused with crushed garlic and red chili
flakes, served with coconut chutney and sambar.

Classic Steamed Idli                                             25,000/=
Soft and fluffy rice-lentil cakes served with coconut chutney,
sambar, and tomato chutney


--- Source page break ---

Fried Idli                                                      30,000/=
Crispy deep-fried idlis tossed with spices and curry leaves,
served with tomato chutney and coconut chutney.

Medu Vada                                                       28,000/=
Crispy, golden-brown deep-fried lentil doughnuts, served with
coconut chutney and sambar.

Idli Vada Combo                                                 30,000/=

   At Haandi Restaurant, we take pride in serving fresh,
    authentic, and flavorful dosas, made with the finest
    ingredients and traditional techniques. We believe
   that every bite should be a journey of taste, texture,
                        and aroma.




  FOLLOW US:

             ALL PRICES ARE INCLUSIVE OF V.A.T
 ONCE AN ORDER IS PLACED IT CANNOT BE CANCELED

             Thank You & Come Again!


--- Source page break ---
```


### Sweets & snacks

Source: `SWEETS MENU HAANDI.pdf`. Layout-preserving source transcription:

```text
BENGHALI SWEETS    1KG      500      250
                            GRM      GRM
Malai Chaap        50,000   25,000   13,000
Cham Cham          50,000   25,000   13,000
Rasbhari           50,000   25,000   13,000
Spongy Rasgulla    50,000   25,000   13,500
Gulabi Cham Cham   60,000   30,000   15,000

LADOO
Motichoor Ladoo    60,000   30,000   15,000
Besan Ladoo        55,000   28,000   15,000
Boondi Ladoo       55,000   28,000   15,000
Dry Fruits Ladoo   70,000   35,000   18,000

DRY FRUIT SWEETS
Kajju Katli        70,000   35,000   20,000
Kajju Rolls        70,000   35,000   20,000
Kajju Badam Burﬁ   75,000   37,500   20,000
Kajju Peda         75,000   37,500   20,000
Anjeer Rolls       85,000   42,500   22,000
Anjeer Katli       85,000   42,500   22,000
Kajju Pista Burﬁ   70,000   35,000   18,000

BURFI
Kajju Burﬁ         55,000   28,000   15,000
Pista Burﬁ         55,000   28,000   15,000
Plain Burﬁ         55,000   28,000   15,000
Besan Burﬁ         55,000   28,000   15,000
Chocolate Burﬁ     60,000   30,000   15,000
Bikanari Burﬁ      55,000   28,000   15,000
Dry Fruit Burﬁ     60,000   30,000   15,000
Kesan Peda         55,000   28,000   15,000
Plain Peda         50,000   25,000   13,000
Dry Fruit Peda     55,000   27,500   15,000
Dal Burﬁ           55,000   27,500   15,000


--- Source page break ---

OTHER SWEETS      1KG      500   250
                           GRM   GRM
Milk Cake         60,000 30,000 15,000
Gujia             60,000 30,000 15,000
Jalebi            50,000 25,000 13,000
Pineapple Rabdi   60,000 30,000 15,000
Rasmalai          60,000 30,000 15,000
Gulab Jamun       60,000 30,000 15,000
Mango Kulﬁ        15,000
Pista Kulﬁ        15,000
Dal Khoya Pinni   60,000 30,000 15,000


SNACKS
Namkeen           10,000
Namak Pare        5,000
Mathri            8,000
Pani Puri         6,000
Papdi Chaat       8,000
Punjabi Samosa    4,000
Dal Kachori       4,000
Samosa Mathri     8,000
Kasawa chips      70,000
Potato Chips      60,000




                                           KAMPALA ROAD BRANCH
                                         Plot 7, 1st Floor Commercial Plaza
                                                           0755 123 546

                                                    NAGURU BRANCH
                                                  Plot 20-30 Saddler Way
                                         Opposite Kampala Parents School
                                                           0701 411 221


--- Source page break ---
```


### Bakery

Source: `haandi bakery.pdf`. Layout-preserving source transcription:

```text
QU
        I   UM        A



   M




                          L
  PRE




                          IT
                              Y
Bakery Menu


--- Source page break ---

   Butterscotch Cake      Red velvet Cake     Strawberry Cake
   90,000/- 1 kg          120,000/- 1 kg      90,000/- 1 kg
   60,000/- 1/2kg         70,000/- 1/2kg      60,000/- 1/2kg




    FRESH FRUIT CAKE        Oreo Cake           Mocha Cake
    100,000/- 1 kg          100,000/- 1 kg      110,000/- 1 kg
                            65,000/- 1/2kg      70,000/- 1/2kg
    65,000/- 1/2kg




Chocolate Truffle Cake   Choco Vanilla Cake   Rasmalai Cake
110,000/- 1 kg           90,000/- 1 kg        100,000/- 1 kg
70,000/- 1/2kg           60,000/- 1/2kg       65,000/- 1/2kg




       Kiwi Cake            Vanilla Cake      Caramel Cake
       90,000/- 1 kg        80,000/- 1 Kg     100,000/- 1 kg
       60,000/- 1/2kg       50,000/- 1/2kg    65,000/- 1/2kg


--- Source page break ---

  Coffee Cake             Chocolate Cake       Chocolate Choco Chips
  100,000/- 1 kg          100,000/- 1 kg       100,000/- 1 kg
  65,000/- 1/2kg          65,000/- 1/2kg       65,000/- 1/2kg




Blueberry Cake         Caramel Mouse Cake              Tiramisu Cake
100,000/- 1 kg         120,000/- 1 kg                  120,000/- 1 kg
65,000/- 1/2kg         75,000/- 1/2kg                  75,000/- 1/2kg




   Mango Cake              White Forest Cake
   85,000/- 1 kg                                        Black Forest Cake
                           90,000/- 1 kg
   60,000/- 1/2kg                                       90,000/- 1 kg
                           60,000/- 1/2kg
                                                        60,000/- 1/2kg




     Kit Kat Cake           Pineapple Cake             CHOCO COFFEE
      130,000/- 1 kg        85,000/- 1 kg              100,000/- 1 kg
      75,000/- 1/2kg        60,000/- 1/2kg             65,000/- 1/2kg


--- Source page break ---

Cakes And Pastry
Note: Please place your order 24 hours before
                                                                       1 KG     HALF KG   SLICE
BUTTER SCOTCH CAKE ........................... 90,000                           60,000    10,000
RED VALVET ................................................. 120,000            70,000    15,000
STRAWBERRY ............................................. 90,000                 60,000    15,000
FRESH FRUIT ............................................... 100,000             65,000    10,000
OREO ............................................................... 100,000    65,000    10,000
MOCHA CAKE .............................................. 110,000               70,000    15,000
CHOCOLATE TRUFFLE .............................. 110,000                        70,000    15,000
CHOCO VANILLA ......................................... 90,000                  60,000    10,000
RASMALAI ..................................................... 100,000          65,000    10,000
KIWI ................................................................. 90,000   60,000    10,000
VANILLA ......................................................... 80,000        50,000    10,000
CARAMEL ...................................................... 100,000          65,000    10,000
COFFEE CAKE ............................................. 100,000               65,000    10,000
CHOCOLATE .................................................. 100,000            65,000    10,000
CHOCOLATE CHOCO CHIPS ..................... 100,000                             65,000    15,000
BLUEBERRY ................................................ 100,000              65,000    10,000
CARAMEL MOUSE CAKE ......................... 120,000                            75,000    20,000
TIRAMISU ...................................................... 120,000         75,000    20,000
MANGO ........................................................... 85,000        60,000    15,000
WHITE FOREST ............................................ 90,000                60,000    15,000
BLACK FOREST ........................................... 90,000                 60,000    10,000
KIT-KAT CAKE ............................................ 130,000               75,000    20,000
PINEAPPLE ................................................... 85,000            60,000    10,000
CHOCO COFFEE ........................................... 100,000                65,000    15,000



American Cheese Cake
 Note: Please place your order 24 hours before
                                                              PRICE KG
 CHEESE CAKE                                                  130,000
 CHEESE CAKE WITH TOPPING                                     140,000
 LEMON CHEESE CAKE                                            130,000
 MANGO CHEESE CAKE                                            130,000
 OREO CHEESE CAKE                                             130,000
 STRAWBERRY CHEESE CAKE                                       130,000


--- Source page break ---

Dry cakes & Muffins
                              CAKES    MUFFINS
VANILLA                       15,000   3,000
CHOCOLATE                     20,000   4,000
APPLE CINNAMON                15,000   5,000
BANANA WALNUT                 20,000   4,000
CARROT                        15,000   4,000
DRYNUTS & MIX                 20,000   4,000
TUTTI FRUIT                   15,000   4,000
ALMOND                        25,000   4,000
PISTACHIO                     25,000   4,000
DATES & WALNUTS               25,000   4,000
MARBLE                        15,000   4,000
LEMON                         15,000   4,000
COFFEE                        20,000   4,000
MOCHA                         25,000   4,000




Cookies                       PACKET
CHOCOLATE                     15,000
CHOCOLATE CHIPS               15,000
BUTTER COOKIES                15,000
ATTA BISCUITS                 15,000
COCONUT COOKIES               15,000
DRYNUT COOKIES                15,000
PENUT BUTTER COOKIES          15,000
NANKHATAI                     15,000
KAJU PISTA                    16,000
ALMOND                        16,000
JEERA COOKIES [SALTED]        15,000
AJWAIN COOKIES [SALTED]       15,000
COCONUT CORN FLAKES COOKIES   15,000
GINGER COOKIES                15,000


--- Source page break ---

Breads
BROWN BREAD [SALTED] ( 500grm)   4,000
WHITE BREAD [SALTED] ( 500grm)   4,000
BROWN BREAD [SWEET] ( 500grm)    4,000
WHITE BREAD [SWEET] ( 500grm)    4,000
BROWN BREAD [SALTED] (1kg)       6,000
WHITE BREAD [SALTED] (1kg)       6,000
BROWN BREAD [SWEET] (1kg)        6,000
WHITE BREAD [SWEET] (1kg)        6,000
PAV BREAD                        4,000
BURGER BUNS (4 pieces)           6,000
GARLIC BREAD                     4,000
WHOLE WHEAT BREAD ( 500grm)      5,000
OATS BREAD ( 500grm)             5,000
MALTIGRAIN BREAD                 6,000


--- Source page break ---

Indian Style Puff
Note: Please place your order 24 hours before
VEGETABLE PUFF                                  5,000
PANEER PUFF                                     6,000
CHICKEN PUFF                                    7,000
MUTTON PUFF                                     7,000
PLAIN PUFF                                      4,000



Desserts
 CHOCOLATE BROWNIE WITH ICE CREAM               25,000
 CHOCO LAVA WITH ICE CREAM                      25,000
 TIRAMISU SLICE                                 20,000
 TRIO CAKE SLICE                                25,000
 CHOCOLATE BROWNIE PLAIN                        15,000
 CHOCOLATE BALL’S (5 PCS)                       10,000
 ASSORTED DOUGHNUTS                             5,000


--- Source page break ---

We Make Customised Cakes On Order.
       
               
   ­­­


       
    
                       
   



   Follow Us
                
                
           
                     


--- Source page break ---
```


# Previous menu reference — retain for reconciliation

**The food portion below is the older description/spice reference, not a second active inventory.** Match it to latest branch drafts before assigning availability. The drinks portion remains the existing drinks reference, with the additions above applied to matching records.


# 🔥 HAANDI RESTAURANT

**Indian • Asian • International Flavours**
*Where Every Dish Tells a Story*

📍 Kampala · 🌐 haandirestaurantkampala.com · 📞 Book a table: `[phone]`

---

## 🎨 Brand Guide

> Estimated from the website screenshot and logo, so confirm against the official brand files.

| Role | Colour | Approx. HEX |
|---|---|---|
| Background | Near-black navy | `#0B0F17` |
| Primary accent (tagline, icons) | Golden yellow | `#F5D90A` |
| Text | White | `#FFFFFF` |
| Logo flame | Fire orange | `#F7941D` |
| Chilli accent | Deep red | `#C8102E` |
| Food warmth (dal, turmeric) | Amber | `#E0A526` |

**Typography:** elegant serif headings (Crimson/Garamond style) with a readable sans-serif body; script lettering for the logo only.
**Taglines:** *Where Every Dish Tells a Story* · *Indian Heritage • Global Flavors • Memorable Experiences*

---

# 🍛 FOOD MENU

## Menu Guide
🟢 **VEG**: vegetarian
🔴 **NON-VEG**: contains meat, chicken, fish or seafood

**Spice guide:** Mild (little or no chilli) · Medium (balanced) · Spicy (stronger chilli and spices) · Very Spicy (extra hot)
*Please tell your waiter if you prefer less or more spice.*

⏱️ *Dishes typically take 20–25 minutes to prepare; some may take a little longer. Thank you for your patience.*

---

## Soups

- 🟢 **Cream of Tomato Soup**: smooth, creamy tomato soup with a light tangy flavour. *Mild*
- 🟢 **Hot & Sour Soup**: vegetables in a flavourful sour and spicy broth. *Medium*
- 🔴 **Chicken Manchow Soup**: chicken and vegetables in a garlicky soup with chilli and herbs. *Medium–Spicy*
- 🔴 **Chicken Sweet Corn Soup**: light chicken soup with sweet corn and egg. *Mild*
- 🔴 **Chicken Hot & Sour Soup**: chicken and vegetables in a tangy, spicy broth. *Medium*
- 🟢 **Vegetable Noodle Soup**: light vegetable broth with noodles and fresh vegetables. *Mild*
- 🟢 **Vegetable Sweet Corn Soup**: light vegetable soup with sweet corn. *Mild*

## Salads

- 🟢 **Green Salad**: cucumber, tomato, onion, lettuce and seasonal vegetables. *Mild*
- 🟢 **Green Chutney**: fresh coriander, mint and green chilli chutney. *Medium–Spicy*
- 🟢 **Golden City Quinoa Salad**: quinoa with fresh vegetables and a light dressing. *Mild*
- 🟢 **Kachumbari Salad**: fresh tomato, onion, coriander and lemon. *Mild*

## Vegetarian Starters

- 🟢 **Paneer Tikka**: marinated cottage cheese grilled in the tandoor. *Medium*
- 🟢 **Haandi Style Paneer Tikka**: grilled paneer with Haandi's special marinade. *Medium*
- 🟢 **Paneer Malai Tikka**: soft paneer marinated with cream and mild spices. *Mild*
- 🟢 **Paneer Achari Tikka**: paneer with tangy Indian pickle spices. *Medium*
- 🟢 **Tandoori Paneer Tikka**: paneer marinated in yoghurt and tandoori spices, grilled. *Medium*
- 🟢 **Chilli Paneer**: crispy paneer with chilli, onion and capsicum. *Medium–Spicy*
- 🟢 **Paneer Salt & Pepper**: crispy paneer with black pepper and seasoning. *Medium*
- 🟢 **Paneer Manchurian**: crispy paneer in a sweet, tangy, spicy Indo-Chinese sauce. *Medium*
- 🟢 **Chinese-Style Paneer**: paneer stir-fried with vegetables and Chinese-style sauce. *Medium*
- 🟢 **Broccoli & Paneer**: broccoli and paneer with light seasoning. *Mild*
- 🟢 **Chilli Broccoli**: crispy broccoli with chilli, onion and capsicum. *Medium–Spicy*
- 🟢 **Vegetable Manchurian (Dry)**: crispy vegetable balls tossed in Manchurian sauce. *Medium*
- 🟢 **Vegetable Manchurian (Gravy)**: vegetable balls in flavourful Manchurian gravy. *Medium*
- 🟢 **Chilli Soya Chaap**: soya chaap with chilli, onion and capsicum. *Medium–Spicy*
- 🟢 **Crispy Fried Chilli Corn**: crispy sweet corn with chilli and seasoning. *Medium*
- 🟢 **Chilli Mushroom**: mushroom with chilli, onion and capsicum. *Medium*
- 🟢 **Mushroom Salt & Pepper**: crispy mushroom with black pepper and seasoning. *Medium*
- 🟢 **Vegetable Platter**: a selection of popular vegetarian starters. *Mild–Medium*
- 🟢 **Butter Garlic Mushroom**: mushroom cooked with butter and fresh garlic. *Mild*
- 🟢 **Tandoori Mushroom**: marinated mushrooms grilled in the tandoor. *Medium*

## Chicken Starters

- 🔴 **Chicken Tikka**: chicken marinated in yoghurt and spices, grilled in the tandoor. *Medium*
- 🔴 **Chicken Reshmi Kebab**: soft, juicy kebab with a creamy, mild flavour. *Mild*
- 🔴 **Chicken Malai Tikka**: tender chicken with cream, cheese and mild spices. *Mild*
- 🔴 **Chicken Achari Tikka**: chicken with tangy Indian pickle spices. *Medium*
- 🔴 **Chicken Angara**: smoky grilled chicken with bold spices. *Spicy*
- 🔴 **Chicken Manchurian**: crispy chicken in a sweet, tangy, spicy sauce. *Medium*
- 🔴 **Chicken Salt & Pepper**: crispy chicken with black pepper and seasoning. *Medium*
- 🔴 **Chilli Chicken**: crispy chicken with chilli, onion and capsicum. *Medium–Spicy*
- 🔴 **Chinese-Style Chicken**: stir-fried chicken with vegetables and Chinese-style sauce. *Medium*
- 🔴 **Chicken Wings**: marinated wings, fried or grilled. *Mild–Medium*
- 🔴 **Chicken Lollipop**: wings in lollipop style, crispy and flavourful. *Medium*
- 🔴 **Chicken 65**: crispy fried chicken, aromatic, spicy and slightly tangy. *Spicy*
- 🔴 **Chicken Drumsticks**: marinated drumsticks, grilled or fried until tender. *Mild–Medium*

## Fish & Prawn Starters

- 🔴 **Crispy Fried Fish**: crispy outside, tender inside. *Mild*
- 🔴 **Fish Tikka**: marinated fish grilled with tandoori spices. *Medium*
- 🔴 **Chilli Fish (Dry)**: crispy fish with chilli, onion and capsicum. *Medium–Spicy*
- 🔴 **Fish Salt & Pepper**: crispy fish with black pepper and seasoning. *Medium*
- 🔴 **Amritsari Fish Fry**: crispy fish coated in seasoned gram flour. *Medium*
- 🔴 **Tandoori Prawns**: prawns marinated in yoghurt and tandoori spices, grilled. *Medium*
- 🔴 **Deep-Fried Prawns**: crispy fried prawns with light seasoning. *Mild*
- 🔴 **Chilli Prawns**: prawns with chilli, onion and capsicum. *Medium–Spicy*

## Mutton & Lamb Starters

- 🔴 **Mutton Seekh Kebab**: minced mutton with herbs and spices, grilled on skewers. *Medium*
- 🔴 **Mutton Tikka**: tender marinated mutton grilled with aromatic spices. *Medium*
- 🔴 **Mutton Shashlik**: grilled mutton with onion and capsicum. *Medium*
- 🔴 **Mutton Chops**: marinated chops grilled until tender and juicy. *Medium*
- 🔴 **Mutton Pepper Fry**: mutton cooked dry with black pepper and spices. *Medium–Spicy*
- 🔴 **Lamb Chops**: tender lamb chops grilled with light seasoning. *Mild–Medium*
- 🔴 **Lamb Seekh Kebab**: minced lamb with herbs and spices, grilled on skewers. *Medium*
- 🔴 **Chilli Lamb Kebab**: lamb cooked with chilli, onion and capsicum. *Medium–Spicy*

## Chicken Main Course

- 🔴 **Chicken Tikka Masala**: tandoori chicken in rich tomato and onion gravy. *Medium*
- 🔴 **Chicken Curry**: traditional curry with onion, tomato and aromatic spices. *Medium*
- 🔴 **Chicken Handi**: tender chicken in rich handi-style gravy. *Medium*
- 🔴 **Punjabi Chicken**: rich Punjabi-style onion and tomato gravy. *Medium*
- 🔴 **Chicken Korma**: creamy, mildly spiced sauce. *Mild*
- 🔴 **Chicken Coconut Curry**: creamy coconut gravy with gentle spices. *Mild–Medium*
- 🔴 **Chicken Palak**: chicken with spinach, garlic and Indian spices. *Medium*
- 🔴 **Chicken Methi**: chicken with fragrant fenugreek leaves and spices. *Medium*
- 🔴 **Chicken Malabar Curry**: chicken with coconut and South Indian spices. *Medium*
- 🔴 **Chicken Malai Korma**: smooth, creamy and mild gravy. *Mild*
- 🔴 **Chicken Makhani**: smooth tomato and butter gravy. *Mild*
- 🔴 **Butter Chicken**: tender chicken in a creamy, buttery tomato sauce. *Mild*
- 🔴 **Tandoori Chicken Masala**: tandoori chicken finished in rich Indian gravy. *Medium*

## Fish Main Course

- 🔴 **Fish Curry**: traditional onion, tomato and spice gravy. *Medium*
- 🔴 **Coconut Fish Curry**: creamy coconut gravy with gentle spices. *Mild–Medium*
- 🔴 **Fish Makhani**: creamy tomato and butter gravy. *Mild*
- 🔴 **Fish Malabar Curry**: coconut, curry leaves and South Indian spices. *Medium*

## Mutton & Lamb Main Course

- 🔴 **Mutton Rogan Josh**: slow-cooked in rich, aromatic Kashmiri-style gravy. *Medium*
- 🔴 **Mutton Masala**: rich onion, tomato and spice gravy. *Medium*
- 🔴 **Mutton Bhuna**: slow-cooked with thick, concentrated masala. *Medium*
- 🔴 **Mutton Vindaloo**: vinegar, spices and chilli for a hot, tangy flavour. *Spicy–Very Spicy*
- 🔴 **Mutton Korma**: rich, creamy and mild gravy. *Mild*
- 🔴 **Mutton Pepper Fry (Dry)**: cooked dry with black pepper and spices. *Spicy*
- 🔴 **Mutton Seekh Masala**: seekh kebab in rich masala gravy. *Medium*
- 🔴 **Mutton Handi**: slow-cooked in rich handi-style gravy. *Medium*
- 🔴 **Mutton Keema**: minced mutton with onion, tomato and spices. *Medium*
- 🔴 **Lamb Shank Masala**: slow-cooked lamb shank in rich masala gravy. *Medium*

## Rice & Biryani

- 🟢 **Steamed Rice**: plain, fluffy basmati rice. *Mild*
- 🟢 **Special Rice**: fragrant rice with vegetables and light seasoning. *Mild*
- 🟢 **Vegetable Pulao**: basmati with vegetables and aromatic spices. *Mild*
- 🟢 **Onion Pulao**: fragrant rice with fried onions and aromatic spices. *Mild*
- 🟢 **Vegetable Biryani**: basmati layered with vegetables, herbs and biryani spices. *Medium*
- 🔴 **Chicken Biryani**: basmati layered with chicken, herbs and biryani spices. *Medium*
- 🔴 **Mutton Biryani**: basmati layered with tender mutton and spices. *Medium*
- 🔴 **Hyderabadi Chicken Biryani**: rich, aromatic biryani with stronger spices. *Medium–Spicy*
- 🔴 **Chicken Jalfrezi Rice**: rice with chicken, vegetables and spicy seasoning. *Medium–Spicy*

## Chips, Papad & Sides

- 🟢 **Plain Chips**: freshly fried, crispy and lightly salted.
- 🟢 **Masala Chips**: crispy chips tossed with aromatic masala. *Medium*
- 🟢 **Plain Papad (Roasted)**: thin, crispy roasted papad with light seasoning.
- 🟢 **Masala Papad (Roasted)**: topped with onion, tomato, coriander and spices. *Medium*
- 🟢 **Crispy Fried Garlic Chips (Spicy)**: crispy chips with fried garlic and chilli. *Spicy*
- 🟢 **Crispy Fried Garlic Chips (Mild)**: crispy garlic chips with light seasoning. *Mild*
- 🟢 **Paneer Pakora**: paneer in seasoned gram flour, fried until crispy. *Mild–Medium*
- 🟢 **Masala Bhajiya**: crispy vegetable fritters with gram flour and Indian spices. *Medium*
- 🟢 **Crispy Fried Onion Rings**: light batter, golden and crispy.
- 🟢 **Honey Chilli Potato**: crispy potato in a sweet, tangy, spicy honey-chilli sauce. *Medium–Spicy*

### Good to know
🌶️ Most dishes can be prepared Mild, Medium or Spicy to your preference.
🧂 Prefer less salt? Tell your waiter when ordering.
⚠️ Please tell our team about any dietary requirements or allergies before ordering.

---

# 🍹 DRINKS MENU

*Indian Heritage • Global Flavors • Memorable Experiences*

## 1. Water & Soft Beverages

**Still & Sparkling Water:** Still Water (500 ml) · Sparkling Water · Soda Water
**Soft Drinks:** Assorted Soft Drinks · Coke Zero
**Fresh Lime & Soda:** Fresh Lime Soda (Sweet / Salted / Mixed) · Fresh Lime Juice (Plain / Mixed)
*Freshly squeezed lime, your choice of sweet, salted or mixed.*

## 2. Fresh Juices
*Made with selected seasonal fruits.*

Mixed Fresh Juice · Passion Fruit Juice · Mango Juice · Fresh Orange Juice · Watermelon Juice · Fresh Pineapple Juice · **Mint Pineapple Juice** (pineapple blended with cooling mint)

## 3. Smoothies
*Fresh fruits blended smooth, creamy and refreshing.*

Mango & Strawberry · Strawberry & Banana · Mango & Banana · Tropical Fruit · Avocado · Mango, Pineapple, Lemon & Mint · Green Healthy

## 4. Lassi & Indian Refreshments
*Traditional yoghurt-based refreshments, served chilled.*

- **Mango Lassi**: creamy yoghurt blended with ripe mango.
- **Sweet Lassi**: smooth chilled yoghurt, gently sweet.
- **Salted Lassi**: yoghurt with a delicate touch of salt and traditional seasoning.
- **Chaas / Buttermilk**: light, spiced buttermilk, traditionally enjoyed with Indian cuisine.

## 5. Fresh Lemonade

- **Classic Fresh Lemonade**: fresh lemon balanced with sweetness, served chilled.
- **Mint Lemonade**: fresh lemon and cooling mint.
- **Strawberry Lemonade**: fresh strawberries and lemon, sweet and tangy.
- **Passion Fruit Lemonade**: passion fruit and fresh lemon, bright and tropical.
- **Sparkling Lemonade**: fresh lemon and sparkling water, lively and crisp.

## 6. Tea

- **Masala Tea**: black tea with aromatic Indian spices and milk.
- **African Tea**: comforting, smooth and aromatic, African style.
- **Lemon Tea**: light tea with fresh lemon.
- **Black Tea**: classic brewed black tea.
- **Ginger Lemon Tea**: fresh ginger and lemon in hot tea.
- **Dawa Tea**: warming blend of lemon, ginger and honey.
- **Green Tea**: delicate, clean and light.

## 7. Iced Tea
*Freshly brewed tea served chilled over ice.*

- **Lemon Iced Tea**: black tea with fresh lemon, ice-cold.
- **Ginger Lemon Iced Tea**: ginger and lemon, zesty finish.
- **Strawberry Iced Tea**: sweet strawberry, fruity finish.
- **Peach Iced Tea**: delicate peach, smooth and fruity.
- **Passion Fruit Iced Tea**: fresh passion fruit, vibrant and tropical.

## 8. Coffee

African Coffee · Black Coffee · **Espresso** (rich, concentrated, smooth) · Double Espresso · Americano · **Cappuccino** (espresso, steamed milk, delicate foam) · **Café Latte** (espresso, steamed milk, light foam) · **Café Mocha** (espresso, chocolate, steamed milk) · **Cold Coffee** (smooth, chilled) · **Iced Coffee** (espresso and chilled coffee over ice)

## 9. Milkshakes
*Thick, creamy and freshly blended.*

Vanilla · Mango · Chocolate · Strawberry · Papaya · Caramel · Peanut Butter
- **Oreo**: creamy vanilla with crushed Oreo cookies.
- **KitKat**: creamy, with chocolate-wafer flavour.
- **Lotus Biscoff**: creamy vanilla with caramelised biscuit flavour.
- **Assorted Fruit**: a blend of selected fresh fruits.

## 10. Mocktails

### Virgin Mojito Collection
- **Classic Virgin Mojito**: fresh lime, mint, sugar and soda.
- **Passion Fruit Virgin Mojito**: passion fruit, lime, mint and soda, tangy finish.
- **Strawberry Virgin Mojito**: fresh strawberries, lime, mint and soda.
- **Mango Virgin Mojito**: ripe mango, lime, mint and soda.

### Signature Mocktails
- **Shirley Temple**: sparkling citrus with grenadine.
- **Fruit Punch**: tropical fruit juices, sweet and tangy.
- **Virgin Piña Colada**: creamy coconut and pineapple.
- **Virgin Piña Colada (Whole Pineapple)**: served inside a whole fresh pineapple.
- **Blue Lagoon**: bright citrus refresher with a blue finish.
- **Blue Sea**: tropical citrus and fruit, finished in blue.
- **Kiwi Cooler**: fresh kiwi with citrus, lively and tropical.
- **Passion Fruit Delight**: passion fruit and citrus.
- **Mango Tango**: sweet ripe mango with tropical flavours.
- **Tropical Sunrise**: colourful tropical fruits with a sunrise effect.
- **Mango Passion Fizz**: mango and passion fruit with sparkle.
- **Virgin Mary**: non-alcoholic tomato drink with citrus, spices and a savoury finish.
- **Virgin Strawberry Daiquiri**: strawberries, lime and sweetness, frozen-style.

## 11. Cocktails 🔞
*Please drink responsibly.*

### Haandi Mojito Collection
- **Classic Mojito**: white rum, lime, mint, sugar, soda.
- **Passion Fruit Mojito**: white rum, passion fruit, lime, mint, soda.
- **Strawberry Mojito**: white rum, strawberries, lime, mint, soda.
- **Mango Mojito**: white rum, ripe mango, lime, mint, soda.

### Classic & Signature
- **Piña Colada**: white rum, pineapple and coconut.
- **Piña Colada (Whole Pineapple)**: our signature, served in a whole fresh pineapple.
- **Long Island Iced Tea**: vodka, gin, rum, tequila, triple sec, lemon and cola.
- **Blue Lagoon**: vodka, citrus and blue curaçao.
- **Whiskey Sour**: whiskey, fresh lemon and sweetness.
- **Bloody Mary**: vodka, tomato juice, lemon and spices.
- **Margarita**: tequila, orange liqueur and fresh lime.
- **Daiquiri**: white rum, fresh lime and sweetness.
- **Tequila Sunrise**: tequila, orange and grenadine.
- **Cosmopolitan**: vodka, orange liqueur, cranberry and lime.
- **Old Fashioned**: whiskey, bitters and sweetness, stirred.
- **Moscow Mule**: vodka, ginger beer and lime.
- **Gin & Tonic**: premium gin and tonic with fresh garnish.
- **Dry Martini**: gin and dry vermouth.
- **Screwdriver**: vodka and fresh orange juice.
- **Manhattan**: whiskey, sweet vermouth and bitters.
- **Negroni**: gin, Campari and sweet vermouth.

## 12. Sharing Cocktails

- **Red Wine Sangria**: red wine, fresh fruit and citrus.
- **White Wine Sangria**: white wine, fresh fruit and citrus, light and crisp.
- **Tropical Sangria**: wine with tropical fruits.

**Pitchers:** Red Wine Sangria · White Wine Sangria · Tropical Sangria · Classic Mojito · Passion Fruit Mojito · Long Island Iced Tea · Fruit Punch

## 13. Shooters

- **Jäger Bomb**: Jägermeister with an energy drink.
- **B-52**: coffee liqueur, Irish cream and orange liqueur, layered.
- **Kamikaze**: vodka, orange liqueur and fresh lime.
- **Tequila Shot**: served chilled with salt and lime.
- **Sambuca Shot**: aromatic anise liqueur.

## 14. Chilled Beers

**Local:** Bell Lager · Guinness Stout · Guinness Smooth · Tusker Lager · Tusker Malt · Tusker Lite · Tusker Cider · Smirnoff Ice Black · Castle Lite · Club
**Imported:** Heineken · Corona · Cavana Cider · Non-Alcoholic Beer

## 15. Red Wine

- **KWV Pinotage**: ripe berry, gentle spice, smooth finish.
- **KWV Merlot**: soft, ripe red fruit, easy-drinking.
- **KWV Shiraz**: dark berries, subtle spice, warm finish.
- **Nederburg Cabernet Sauvignon**: full-bodied, dark fruit, subtle oak.
- **Nederburg Shiraz**: bold, ripe berries and spice.
- **Calvet Cabernet Sauvignon**: Bordeaux-style, black fruit, balanced tannins.
- **Calvet Reserve Bordeaux Merlot Cabernet Sauvignon**: refined blend, ripe fruit, balanced oak.
- **Four Cousins Red Sweet (750 ml)**: fruity, sweet, approachable.
- **Four Cousins Red Dry (1.5 L)**: smooth dry red, ideal for sharing.
- **Jacob's Creek Classic Shiraz**: Australian, ripe berry, subtle spice.
- **Kanonkop Kadette Cabernet Sauvignon**: premium South African, dark fruit, elegant structure.
- **Masi Campofiorin**: Italian, ripe cherry, spice, rounded finish.
- **Masi Costasera Amarone**: luxurious Amarone, concentrated dark fruit, long velvety finish.

## 16. White Wine

- **KWV Chardonnay**: smooth, fresh, ripe fruit.
- **KWV Chenin Blanc**: lively, bright fruit, clean finish.
- **KWV Sauvignon Blanc**: crisp, citrus and tropical fruit.
- **Calvet Chardonnay**: elegant, fresh fruit, soft finish.
- **Calvet Reserve Bordeaux Sauvignon Blanc**: citrus, herbal and tropical notes.
- **Four Cousins White Sweet (1.5 L)**: fruity, fresh, gently sweet.
- **Four Cousins White Dry (1.5 L)**: crisp, clean fruit, ideal for sharing.
- **Masi Masianco Pinot Grigio**: Italian, citrus, pear and tropical fruit.

## 17. Rosé Wine

- **KWV Classic Shiraz Rosé**: fresh, bright berry, crisp finish.
- **Ken Forrester Petit Rosé**: elegant, delicate fruit, clean finish.

## 18. Sparkling Wine

- **KWV Sparkling Cuvée Brut**: crisp, delicate bubbles, dry finish.
- **Calvet Celebration Brut Sparkling**: bright, fine bubbles, celebratory.
- **Signore Giuseppe Prosecco Extra Dry**: Italian, fine bubbles, lightly sweet.

## 19. Champagne

- **Moët & Chandon Brut Impérial**: iconic French Champagne, elegant and refined.
- **Moët & Chandon Rosé**: red-fruit character, delicate bubbles.
- **Mumm Cordon Rouge Brut**: fresh fruit, citrus, crisp finish.

## 20–29. Spirits & Liqueurs
*Per tot, 30 ml.*

**Whisky:** Johnnie Walker Red · Black · Green 15 Yrs · Gold Reserve · Chivas Regal 12 · 18 Yrs · Ballantine's · J&B Rare · Teacher's Highland Cream · VAT 69 · All Seasons · The Famous Grouse · Jameson · Jameson Black Barrel · Jim Beam · Gentleman Jack · Jack Daniel's · Monkey Shoulder

**Single Malt:** Glenfiddich 12 / 15 / 18 · The Glenlivet 12 / 15 / 18 · Singleton 12 / 15 / 18 · Aberlour 12 · Lagavulin 16 · The Macallan 12 · Talisker 10 · Glenmorangie Original 10

**Bourbon & American Whiskey:** Jim Beam · Jack Daniel's · Gentleman Jack · Maker's Mark · Woodford Reserve

**Rum:** Bacardi White · Black · Gold · Malibu · Captain Morgan Spiced Gold · Dark · Havana Club 3 Yrs · 7 Yrs

**Vodka:** OPM · Smirnoff · Absolut · Absolut Vanilla · Cîroc · Grey Goose · Belvedere

**Gin:** UG Premium · UG Coconut · UG Ginger Lemon · Gilbey's · Gordon's · Bombay Sapphire · Beefeater Dry · Tanqueray London Dry · Hendrick's

**Tequila:** Gold · Silver · Chocolate · Jose Cuervo Silver · Gold · Olmeca Blanco · Gold

**Brandy & Cognac:** KWV 5 Yrs · KWV 10 Yrs · Viceroy · Martell VS · VSOP · Rémy Martin VSOP · XO · Hennessy VS · VSOP

**Liqueurs:** Amarula Cream · Baileys Irish Cream · Cointreau · Jägermeister · Green Zappa · Campari Bitter · Kahlúa · Southern Comfort · Tia Maria · Triple Sec · Sambuca · Disaronno Amaretto · Blue Curaçao · Martini Bianco · Rosso · Extra Dry · Aperol

**Vermouth & Aperitifs:** Martini Bianco · Martini Rosso · Martini Extra Dry · Aperol · Campari

## 30. Mixers & Garnishes

**Mixers:** Tonic Water · Soda Water · Ginger Ale · Cola · Lemon-Lime Soda · Ginger Beer
**Fresh Mixers:** Fresh Lime · Fresh Lemon · Orange Juice · Pineapple Juice · Passion Fruit Juice
**Garnishes:** Fresh Mint · Basil · Ginger · Lemon · Lime · Seasonal Fruit

---

## ⭐ Haandi Signature Picks

| Category | Pick |
|---|---|
| Refreshing | Classic Virgin Mojito |
| Indian Favourite | Mango Lassi |
| Fruit Lover | Tropical Fruit Smoothie |
| Milkshake Favourite | Lotus Biscoff Milkshake |
| Cocktail Favourite | Classic Mojito |
| Premium Cocktail | Old Fashioned |
| Red Wine | Calvet Reserve Bordeaux Merlot Cabernet Sauvignon |
| White Wine | KWV Sauvignon Blanc |
| Sparkling | KWV Sparkling Cuvée Brut |
| Champagne | Moët & Chandon Brut Impérial |

### Bar Service Information
- Spirits: 30 ml per tot unless stated otherwise.
- Wine: by the glass and bottle where applicable.
- Imported and premium products are subject to availability.

**Please drink responsibly.**

---

**HAANDI RESTAURANT** · Indian Heritage • Global Flavors • Memorable Experiences
