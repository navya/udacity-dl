# udacity-dl
A simple script to list downloadable content for a udacity course

## Usage

- The script is invoked by providing a course number

```bash
node index.js <course_no>
```

- So, what can we do with a list of URLs? Why, download them!

```bash
node index.js st101 | xargs -n 1 -I link -exec wget link \;
```

- Shell Magic<sup>TM</sup>


## TODO

- Antigen compatibility
- Interactive
