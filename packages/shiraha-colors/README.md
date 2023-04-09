# Shiraha Colors

Browser script to generate colors for Shiraha / Material Web.

## Usage

```html
<script type="module" src="https://esm.run/shiraha-colors" async></script>
```

### Configuration

You can see all supported configuration options in [src/types.ts](src/types.ts).

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

### nomodule

```html
<head>
  <script type="module" src="https://esm.run/shiraha-colors" async></script>
  <script nomodule src="https://esm.run/shiraha-colors/nomodule" async></script>
</head>
```

### with [Partytown](https://partytown.builder.io)

> Partytown does not support ES Module at this time. see [partytown#195](https://github.com/BuilderIO/partytown/issues/195)

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
