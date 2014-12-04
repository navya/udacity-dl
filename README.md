# udacity-dl
A simple script to download course contents for a udacity course

## Usage

- The script is invoked by providing a course number

```bash
node index.js <course_no>
```

- The above doesn't do much and just lists all the associated files. 
  You can pipe on to download the files:

```bash
node index.js st101 | xargs -n 1 -I link -exec wget link \;
```

- Isn't shell magical?


## TODO

- Antigen compatibility
- Interactive
