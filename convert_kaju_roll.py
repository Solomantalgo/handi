from PIL import Image
im = Image.open('kaju-roll-source.jpg').convert('RGB')
im.thumbnail((1200, 1200), Image.Resampling.LANCZOS)
im.save('images/items/food/retail-sweet-kaju-rolls.webp', 'WEBP', quality=84, method=6)
print(im.size)
