# Updating the menu preview

Menu content, stock image references, category artwork, and the item image manifest are maintained in `data.js`.

- Food and drinks each have a stable ID and an `image` field. Individual image references live in the `ITEM_IMAGE_ASSETS` map keyed by stable item ID. Unmapped items render an intentional neutral photo area.
- `ITEM_IMAGE_MANIFEST` lists every item, its image status, and source metadata when an image is assigned. The human-readable mapping is in `ASSET-MANIFEST.md`.
- Food category art is separate in `FOOD_CATEGORY_IMAGES`; it is never used as an item-photo fallback.
- Supplied banner artwork is optimized in `images/banners/*.webp`; the supplied PNG originals remain in place.
- Keep prices `null` until approved. Ordering configuration remains in `CONFIG`; this stage does not change checkout behavior.

Replace stock imagery by updating only the matching stable ID in `ITEM_IMAGE_ASSETS` and storing the approved photo in `images/items/food/` or `images/items/drinks/`. Update its source metadata/manifest row; menu rendering and ordering logic do not need changes.
