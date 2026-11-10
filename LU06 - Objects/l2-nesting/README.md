# Nested Objects

- [Video Exampling](https://www.youtube.com/watch?v=b8gwYQ_V4K4)
- [Code Example](https://www.w3schools.com/js/tryit.asp?filename=tryjs_array_nested)

## Diagram

Code

```js
const carsLot = {
    owner: "John",
    address: "123 Main Street",
    cars: [
        {
            model: "BMW",
            year: 2010
        },
        {
            model: "Ford",
            year: 2015,
            pastOwners: ["Mary", "Jane"]
        }
    ]
}
```

Diagram

```mermaid
flowchart TD
    carsLot["carsLot Object"]
    owner["owner: 'John'"]
    address["address: '123 Main Street'"]

subgraph "Level 2"
cars["cars Array"]

subgraph "Level 3"
car1["BMW Object
model: 'BMW'
year: 2010"]

subgraph "Level 4"
car2["Ford Object
model: 'Ford'
year: 2015"]

po["pastOwners Array
['Mary', 'Jane']"]
end
end
end

carsLot --> owner
carsLot --> address
carsLot --> cars
cars --> car1
cars --> car2
car2 --> po
```

## Example

[`index.html](index.html)