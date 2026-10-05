"""Builds the trimmed fonts used on the site.

Fraunces ships as a 62 KB variable font (weights 100–900, SOFT 0–100). The site
only uses weights 500–600 with SOFT pinned at 100, and only Latin text, so we
instance and subset it to keep the font that paints the hero headline small.

Run with fontTools installed:  pip install fonttools brotli
    python scripts/subset-fonts.py
"""
from pathlib import Path
from fontTools.ttLib import TTFont
from fontTools.varLib.instancer import instantiateVariableFont
from fontTools import subset

root = Path(__file__).resolve().parent.parent
src = root / 'node_modules/@fontsource-variable/fraunces/files/fraunces-latin-soft-normal.woff2'
out = root / 'src/assets/fonts/fraunces-soft-500-600-latin.woff2'

font = TTFont(src)
font = instantiateVariableFont(font, {'wght': (500, 600), 'SOFT': 100})

# Basic Latin, Latin-1 Supplement, general punctuation (curly quotes, dashes, ellipsis), ™
unicodes = [*range(0x20, 0x7F), *range(0xA0, 0x100), *range(0x2010, 0x2028), 0x2122]
options = subset.Options()
options.flavor = 'woff2'
options.layout_features = ['kern', 'liga', 'calt', 'ccmp', 'locl', 'mark', 'mkmk']
options.name_IDs = ['*']
subsetter = subset.Subsetter(options)
subsetter.populate(unicodes=unicodes)
subsetter.subset(font)
font.flavor = 'woff2'
font.save(out)
print(f'{out.relative_to(root)}: {out.stat().st_size / 1024:.1f} KB (from {src.stat().st_size / 1024:.1f} KB)')

# Caveat (handwritten notes): one weight, used only for short English labels.
src = root / 'node_modules/@fontsource/caveat/files/caveat-latin-600-normal.woff2'
out = root / 'src/assets/fonts/caveat-600-latin.woff2'
font = TTFont(src)
subsetter = subset.Subsetter(options)
subsetter.populate(unicodes=[*range(0x20, 0x7F), 0x2019, 0x2018, 0x201C, 0x201D, 0x2013, 0x2014, 0x2026, 0xE9])
subsetter.subset(font)
font.flavor = 'woff2'
font.save(out)
print(f'{out.relative_to(root)}: {out.stat().st_size / 1024:.1f} KB (from {src.stat().st_size / 1024:.1f} KB)')
