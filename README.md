# Orda Task

Form was built with React, and implements validation.
State is managed with Context API.

### Additional features added:

- Language switcher from English to Hebrew

  - English form only accepts letters in English (in the name fields)
  - Hebrew form only accepts letters in Hebrew (in the name fields)

- Validation included:

  - name fields must have at least 2 characters each
  - email field must be a valid email address
  - id number (teudat zehut number) must match actual teudat zehut number format (used algrotihm from [here](https://gist.github.com/freak4pc/6802be89d019bca57756a675d761c5a8))
  - gender field must be selected
  - Date of birth selected must be at least 18 years ago.

- Responsive design
