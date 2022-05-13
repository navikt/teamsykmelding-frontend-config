# teamsykmelding-frontend-config

## Installer

`yarn add -D @navikt/teamsykmelding-frontend-config`

## eslint

Bruk eslint config i prosjektet ditt:

I `package.json`:

```json
{
    "eslintConfig": {
      "extends": "@navikt/eslint-config-teamsykmelding"
    }
}
```

Bruk eslint config for nextjs i prosjektet ditt:

I `package.json`:

```json
{
    "eslintConfig": {
       "extends": ["@navikt/eslint-config-teamsykmelding", "next/core-web-vitals"]
    }
}
```


## prettier

Bruk prettier config i prosjektet ditt:

I `package.json`:

```json
{
    "prettier": "@navikt/eslint-config-teamsykmelding/prettier",
}
```
