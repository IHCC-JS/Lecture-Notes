# Next.js Intro to Tailwind

[//]: # "TOOD add the Chinese_Tiangong_Space_Station "
[//]: # "TOOD finish the README to include set up instructions"

<!-- TODO fix the image styling -->

## Add Outside Resources

Project makes use of images stored on Wikipedia so we need to add it as an resources. Make a `next.config.js` file in root and add the following content.

```js
module.exports = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "upload.wikimedia.org",
                port: "",
                pathname: "/**",
                search: "",
            },
        ],
    },
};
```
