# Account value

> **The value of an account should represent how much money/effort a new player would need to replicate that account.** This is not a representation of how much gold a account could achieve if it sold all items, since it includes soulbound items and account unlocks.

## Item value

### Item value

1. If the item is currently sold in the tradingpost, then the **sell price** is used
2. If the item is currently not sold in the tradingpost, then the greater of the **last known sell price** and the **crafting price** is used
3. If the item was never sold and cannot be crafted, then the **buy price** is used
4. If the item has no tradingpost price and cannot be crafted, then the **vendor price** is used

### Untradable items

Some items (like the "Permanent Merchant Express" or the "Miniature Gwynefyrdd") are account-bound and therefore don't have a tradingpost price. Instead, they inherit the value of tradable containers they are included in or items that can be traded for them.

### Containers

Arguably all containers hold a value, but since it can be completely random how much a container is actually worth and the effort of maintaining a list of container to item mappings is not justified, containers without a tradingpost price are ignored.

The one exception to this are ascended boxes, which use the average value across all possible ascended items as a rough estimate.

### Gemstore items

While a lot of gemstore items are acquired for free from dailies or events, they definitely hold a value. This value is the default gem price (without taking sales into account) at the current gold to gem conversion rate.

## Account value

### Characters / Bank / Material Storage

The value of characters, bank and material storage get calculated with the value of the items in them. For characters, inventory as well as equipment are considered.

### Skins

Single skins can be acquired from a lot of items most of the time. The value of a skins is therefore the value of the cheapest item unlocking the skin. Since this is a special case of getting the "lowest" valued item, item values which are only calculated with the vendor price and items with no value (e.g. karma vendor items) will be ignored, since they distort the correct skin value.

When calculating the total account value, skins only have a value if the account has no item of this skin in their inventory, so they don't count twice. Skins also have "inherited" skins, which means if you for example have "Eternity" unlocked, then "Sunrise", "Twilight", "Dusk" and "Dawn" are set to have no value (this is the same for all legendaries).

### Dyes & Miniatures

The value of unlocked dyes and miniatures equals the value of the items needed to unlock them. This means that unlocking a miniature and holding it in your inventory has the same value to your account.

### Outfits

Outfits are values by the price (either in gold, items or gems) that is payed to unlock them.

### Wallet

:construction: **Everything except "Gold" is not supported yet.** :construction:

Every currency in the wallet is valued at the currently best *permanent & safe* conversion rate.

- **Gold:** Direct value
- **Spirit Shards:** Best conversion excluding weapons (since they are not a safe conversion and usually require dungeon tokens as well)
- **Dungeon Tokens:** Best conversion rate excluding items needing account bound recipes and weapons
- **Gems:** Current gems to gold conversion rate
- **Laurels:** Best conversion excluding once-per-account items
- **Karma / Badges of Honor / Guild Commendations / Claim Tickets:** Best conversion rate

### Crafting & Recipes

- The value of a crafting profession equals the cost of leveling the crafting profession to that rating.
- The value of unlocked recipes equals the cost of the recipe itself.

### Private Guilds ("Guild Bank")

:construction: **This is not supported yet.** :construction:

In the case the account owns a private guild, which is defined by a guild with the **account as the only member with deposit & withdraw rights** and with **a maximum of 3 members**. All the items in the guild vault count to the account value with their specific value.

### What does not have a value?

- **Achievements & Titles**: The values for achievements & titles are already included in some other section, either with the item you get for completing them or the items you need to progress them. Some also don't have a value at all - like achievements for doing dungeons - and the value comes from working on the them.
- **Guild Halls**: The amount of people owning a guild hall for themselves is extremely small. Instead, guild halls are a collaborative effort, and can't be attributed to single accounts.
