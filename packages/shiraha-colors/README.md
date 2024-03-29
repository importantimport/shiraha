# Shiraha Colors

Browser script to generate colors for Shiraha / Material Web.

## Usage

```html
<script type="module" src="https://esm.run/shiraha-colors" async></script>
```

### nomodule

Add `<script nomodule` to be used in environments that do not support ES Module.

```html
<head>
  <script type="module" src="https://esm.run/shiraha-colors" async></script>
  <script nomodule src="https://esm.run/shiraha-colors/nomodule" async></script>
</head>
```

### worker (experimental)

An experimental version that moves some of the work to Web Worker but increases
in size.

```html
<script type="module" src="https://esm.run/shiraha-colors/worker" async></script>
```

### Configuration

You can see all supported configuration options in
[src/global.d.ts](src/global.d.ts).

```html
<head>
  <script>
    shiraha = {
      colors: {
        /* Shiraha Colors Config */
      },
    }
  </script>
  <script type="module" src="https://esm.run/shiraha-colors" async></script>
</head>
```

### with [Partytown](https://partytown.builder.io)

> Shiraha Colors is currently not compatible with Partytown. see
> [#20](https://github.com/importantimport/shiraha/issues/20)
>
> Partytown does not support ES Module at this time. see
> [partytown#195](https://github.com/BuilderIO/partytown/issues/195)

```html
<head>
  <script
    type="text/partytown"
    src="https://esm.run/shiraha-colors/nomodule"
    async
  ></script>
  <script>
    partytown = {
      forward: ['shiraha'],
    }
  </script>
  <script>
    /* Inlined Partytown Snippet */
  </script>
</head>
```
