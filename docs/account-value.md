# Account value

> **The value of an account should represent how much money/effort a new player would need to replicate that account.** This is not a representation of how much gold an account could achieve if it sold all items since it includes soulbound items and account unlocks.

## Item value

### Accurate sell price

We employ the following algorithm to determine whether the sell price of an item is an accurate representation of it's value. If any of the following points match for an item, the sell price is assumed to be accurate:

- **The buy price of the item is higher than 500 gold.** This metric catches generally valuable items that people might not have buy orders for temporarily because they are so expensive.
  - *A person trying to trick the system can't manipulate this easily because if they add a buy order of e.g. 600g for an item that is only worth 3g, someone will fill the offer and it will correct itself down automatically.*
- **The supply of the item is higher than 5000.** This metric is the "catch-all" for high throughput materials, where the market generally self-corrects very fast.
  - *A person trying to trick the system could theoretically manipulate this by listing 5000 items at a high price, but this will cost a ton of money, and someone can just list an item for cheaper to correct it back down.*
- **The sell price is less than the buy price / 5.** We think it's fair to say that if someone is willing to order an item for 100g and there are some listed for 400g, the value could be / is closer to 400g. Meanwhile, if there are orders for 1g and there is an item listed for 10000g, the value is closer to 1g.
- **The sell price minus the buy price is less than 2 gold.** This is to handle all the little items where the other metrics might not grip correctly (e.g. a 20c profit could be 800% ROI). 
  - *This is generally also hard to manipulate because to make a real shift in account value you will have to have a ton of the items on your account (1/2 item per 1g increase).*

### Item value

The first row defined for an item determines it's value:

| **Accurate sell price**                         | **Inaccurate sell price**                       |
|-------------------------------------------------|-------------------------------------------------|
| Current sell order                              | -                                               |
| Last known sell order                           | -                                               |
| Current buy order                               | Current buy order                               |
| Current crafting cost (materials via buy order) | Current crafting cost (materials via buy order) |
| Last known buy order                            | Last known buy order                            |
| Vendor price                                    | Vendor price                                    |
| 0                                               | 0                                               |

### Untradable items

Some items (like the "Permanent Merchant Express" or the "Miniature Gwynefyrdd") are account-bound and therefore don't have a tradingpost price. Instead, they inherit the value of tradable containers they are included in or items that can be traded for them.

### Containers

Arguably all containers hold a value, but since it can be completely random how much a container is worth and the effort of maintaining a list of container-to-item mappings is not justified, containers without a tradingpost price are ignored.

The one exception to this are ascended boxes, which use the average value across all possible ascended items as a rough estimate.

### Gemstore items

Items sold at the gemstore have the value of their default gem price (without taking sales into account) at the current gold to gem conversion rate.

However, the following gem items are ignored for the value calculation, since they are amassed from dailies and events for free:

Bank Access Express, Banker Golem (2 weeks), Black Lion Salvage Kit, Box o' Fun, Crafting Booster, Experience Booster, Gathering Booster, Glory Booster, Heroic Booster, Instant Repair Canister, Item Booster, Karma Booster, Killstreak Experience Booster, Magic Find Booster, Merchant Express, Metabolic Primer, Mystic Forge Stone, Revive Orb, Super Adventure Box o' Fun, Swim Speed Boost, Trading Post Express, Transmutation Charge, WXP Booster

## Account value

### Characters / Bank / Material Storage

The value of characters, bank and material storage gets calculated via the value of the items in them. For characters, inventory, as well as equipment, are considered.

### Skins

A single skin can be acquired from many items most of the time. The value of a skin is, therefore, the value of the cheapest item unlocking the skin. Since this is a particular case of getting the "lowest" valued item, item values which are only calculated with the vendor price and items with no value (e.g. karma vendor items) will be ignored, since they distort the correct skin value.

When calculating the total account value, skins only have a value if the account has no item of this skin in their inventory, so they effectively don't count twice. Skins also have "inherited" skins, which means if you, for example, have "Eternity" unlocked, then "Sunrise", "Twilight", "Dusk" and "Dawn" are set to have no value (this is the same for all legendaries).

### Dyes & Miniatures

The value of unlocked dyes and miniatures equals the value of the items needed to unlock them. This means that unlocking a miniature and holding it in your inventory has the same value to your account.

### Outfits

Outfits are valued by the price (either in gold, items or gems) that is paid to unlock them.

### Wallet

- **Gold** is valued at it's direct value
- **Gems** are valued at the current gems to gold conversion rate
- **Other currencies** *are not valued, since there is no "best" way for conversion, and there are many other use cases for them other than conversion. If you want your currencies to count into the account value, convert them into Gold as you see fit.*

### Crafting & Recipes

The value of a crafting profession equals the cost of levelling the crafting profession to that rating.

The value of unlocked recipes equals the cost of the recipe sheets.

### What does not have a value?

- **Achievements & Titles**: The values for achievements & titles are already included in some other section, either with the item you get for completing them or the items you need to progress them.
- **Guild Banks**: While a portion of the playerbase uses guild banks as an extension of the account bank, including guild banks into the value is likely to add a whole host of issues around defining what a "personal" guild bank actually is.
- **Guild Halls**: The amount of people owning a guild hall for themselves is minimal. Instead, guild halls are a collaborative effort, and can't be attributed to single accounts. Therefore they do not count towards the account value.
