# udacity-dl
A simple script to list downloadable content for a udacity course

## Installation

### Antigen

```shell
npm install -g udacity-dl
```

## Usage

- The script is invoked by providing a course number

```bash
udacity-dl <course_no>
```

- So, what can we do with a list of URLs? Why, download them!

```bash
udacity-dl st101 | xargs -n 1 -I link -exec wget link \;
```

- Shell Magic<sup>TM</sup>

