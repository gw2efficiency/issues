# Account value

> **The value of an account should represent how much money/effort a new player would need to replicate that account.** This is not a representation of how much gold an account could achieve if it sold all items since it includes soulbound items and account unlocks.

## Item value

### Item value

An item is considered **artificially inflated** if it has a low buy price, a low supply on the market, a sell price that is a lot higher than the buy price and a substantial difference between buy and sell price.

The first row defined for an item determines it's value:

| **Artificially inflated item**                  | **Not artificially inflated item**              |
|-------------------------------------------------|-------------------------------------------------|
| -                                               | Current sell order                              |
| -                                               | Last known sell order                           |
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

While a lot of gemstore items are acquired for free from dailies or events, they do hold a value. This value is the default gem price (without taking sales into account) at the current gold to gem conversion rate.

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

:construction: **Everything except "Gold" is not supported yet.** :construction:

Every currency in the wallet is valued at the currently best *permanent & safe* conversion rate.

- **Gold:** Direct value
- **Spirit Shards:** Best conversion excluding weapons (since they are not a safe conversion and usually require dungeon tokens as well)
- **Dungeon Tokens:** Best conversion rate excluding items needing account-bound recipes and weapons
- **Gems:** Current gems to gold conversion rate
- **Laurels:** Best conversion excluding once-per-account items
- **Karma / Badges of Honor / Guild Commendations / Claim Tickets:** Best conversion rate

### Crafting & Recipes

The value of a crafting profession equals the cost of levelling the crafting profession to that rating.

The value of unlocked recipes equals the cost of the recipe sheets.

### What does not have a value?

- **Achievements & Titles**: The values for achievements & titles are already included in some other section, either with the item you get for completing them or the items you need to progress them.
- **Guild Banks**: While a portion of the playerbase uses guild banks as an extension of the account bank, including guild banks into the value is likely to add a whole host of issues around defining what a "personal" guild bank actually is.
- **Guild Halls**: The amount of people owning a guild hall for themselves is minimal. Instead, guild halls are a collaborative effort, and can't be attributed to single accounts. Therefore they do not count towards the account value.
