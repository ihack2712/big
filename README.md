# big

Turn a number, string or big integer into a big integer.

> This module is pretty much useless.

## Usage

```ts
import { big } from "https://deno.land/x/big/mod.ts";
big(123);
big(true);
big(false);
big(-321);
big(-1.2);
big(2.1);
big("0b00");
big("0b11");
big("0o01234567");
big("0x0123456789ABCDEF");
```

Wheras `Big` is the types that can be converted.
