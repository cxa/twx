# twx

Just [clsx](https://www.npmjs.com/package/clsx) + [tailwind-merge](https://github.com/dcastil/tailwind-merge).

``` tsx
import twx from '@cxa/twx'
// or import { $ } from '@cxa/twx' if you like shorthand

<div className={twx('text-2xl', cond && 'text-red-500')}>hello world</div>
```
