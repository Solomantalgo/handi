# Updating the preview

Menu content is in `data.js`.

- Food items are objects generated with `F(category, name, description, spice, vegetarian)`. Keep `price: null` until prices are approved; the preview intentionally shows “Price to be confirmed”.
- To add or replace a food image, edit the relevant `foodImage` URL. Item data should carry a stable `image` path/URL so UI code does not need to change.
- Drinks are grouped in `DRINK_GROUPS` with subcategories and ` · `-separated records. Keep serving notes such as `30 ml per tot` in the supplied group.
- Branches, WhatsApp number, website URL, and `liveOrdering` are in `CONFIG`.

Set `CONFIG.liveOrdering` to `true` only after all prices and restaurant operations are confirmed, then connect the final WhatsApp action in `app.js`.
