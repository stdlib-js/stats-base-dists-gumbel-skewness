<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Skewness

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> [Gumbel][gumbel-distribution] distribution [skewness][skewness].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The [skewness][skewness] for a [Gumbel][gumbel-distribution] random variable with location `μ` and scale `β` is

<!-- <equation class="equation" label="eq:gumbel_skewness" align="center" raw="\operatorname{skew}\left( X \right) = {\frac{12{\sqrt{6}}\,\zeta(3)}{\pi^{3}}} \approx 1.14" alt="Skewness for a Gumbel distribution."> -->

```math
\mathop{\mathrm{skew}}\left( X \right) = {\frac{12{\sqrt{6}}\,\zeta(3)}{\pi^{3}}} \approx 1.14
```

<!-- <div class="equation" align="center" data-raw-text="\operatorname{skew}\left( X \right) = {\frac{12{\sqrt{6}}\,\zeta(3)}{\pi^{3}}} \approx 1.14" data-equation="eq:gumbel_skewness">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/gumbel/skewness/docs/img/equation_gumbel_skewness.svg" alt="Skewness for a Gumbel distribution.">
    <br>
</div> -->

<!-- </equation> -->

where `ζ` is the [Riemann zeta function][zeta].

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

```javascript
import skewness from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-gumbel-skewness@v0.3.1-esm/index.mjs';
```

#### skewness( mu, beta )

Returns the [skewness][skewness] for a [Gumbel][gumbel-distribution] distribution with location parameter `mu` and scale parameter `beta`.

```javascript
var y = skewness( 2.0, 1.0 );
// returns ~1.14

y = skewness( 0.0, 1.0 );
// returns ~1.14

y = skewness( -1.0, 4.0 );
// returns ~1.14
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = skewness( NaN, 1.0 );
// returns NaN

y = skewness( 0.0, NaN );
// returns NaN
```

If provided `beta <= 0`, the function returns `NaN`.

```javascript
var y = skewness( 0.0, 0.0 );
// returns NaN

y = skewness( 0.0, -1.0 );
// returns NaN
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import uniform from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-array-uniform@esm/index.mjs';
import logEachMap from 'https://cdn.jsdelivr.net/gh/stdlib-js/console-log-each-map@esm/index.mjs';
import skewness from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-gumbel-skewness@v0.3.1-esm/index.mjs';

var opts = {
    'dtype': 'float64'
};
var beta = uniform( 10, 0.0, 10.0, opts );
var mu = uniform( 10, -5.0, 5.0, opts );

logEachMap( 'µ: %0.4f, β: %0.4f, skew(X;µ,β): %0.4f', mu, beta, skewness );

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->



<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2026. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-base-dists-gumbel-skewness.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-base-dists-gumbel-skewness

[test-image]: https://github.com/stdlib-js/stats-base-dists-gumbel-skewness/actions/workflows/test.yml/badge.svg?branch=v0.3.1
[test-url]: https://github.com/stdlib-js/stats-base-dists-gumbel-skewness/actions/workflows/test.yml?query=branch:v0.3.1

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-base-dists-gumbel-skewness/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-base-dists-gumbel-skewness?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-base-dists-gumbel-skewness.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-base-dists-gumbel-skewness/main

-->

[chat-image]: https://img.shields.io/badge/zulip-join_chat-brightgreen.svg
[chat-url]: https://stdlib.zulipchat.com

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-base-dists-gumbel-skewness/tree/deno
[deno-readme]: https://github.com/stdlib-js/stats-base-dists-gumbel-skewness/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/stats-base-dists-gumbel-skewness/tree/umd
[umd-readme]: https://github.com/stdlib-js/stats-base-dists-gumbel-skewness/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/stats-base-dists-gumbel-skewness/tree/esm
[esm-readme]: https://github.com/stdlib-js/stats-base-dists-gumbel-skewness/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/stats-base-dists-gumbel-skewness/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-base-dists-gumbel-skewness/main/LICENSE

[gumbel-distribution]: https://en.wikipedia.org/wiki/Gumbel_distribution

[skewness]: https://en.wikipedia.org/wiki/Skewness

[zeta]: https://en.wikipedia.org/wiki/Riemann_zeta_function

</section>

<!-- /.links -->
