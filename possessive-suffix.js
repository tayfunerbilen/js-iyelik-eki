class PossessiveSuffix {
    constructor() {
        this.conjunction = `'`;
    }

    word(vocable) {

        this.lastLetter = vocable.charAt(vocable.length - 1);
        this.vowels = 'aeıioöuü';
        this.possessiveSuffixes = ['nın', 'nin', 'nun', 'nün'];

        if (!this.vowels.includes(this.lastLetter)) {
            this.lastLetter = vocable.charAt(vocable.length - 2);
            this.possessiveSuffixes = ['ın', 'in', 'un', 'ün'];
        }

        this.possessiveSuffix = this.possessiveSuffixes[0];

        switch (this.lastLetter.toLocaleLowerCase()) {

            case 'a':
            case 'ı':
                this.possessiveSuffix = this.possessiveSuffixes[0];
                break;

            case 'e':
            case 'i':
                this.possessiveSuffix = this.possessiveSuffixes[1];
                break;

            case 'o':
            case 'u':
                this.possessiveSuffix = this.possessiveSuffixes[2];
                break;

            case 'ö':
            case 'ü':
                this.possessiveSuffix = this.possessiveSuffixes[3];
                break;

        }

        this.vocable = `${vocable}${this.conjunction}${this.possessiveSuffix}`;

        return this;

    }

    toLowerCase() {
        this.vocable = this.vocable.toLocaleLowerCase();
        return this;
    }

    toUpperCase() {
        this.vocable = this.vocable.toLocaleUpperCase();
        return this;
    }

    toCapitalize() {
        this.vocable = this.vocable.charAt(0).toLocaleUpperCase() + this.vocable.slice(1);
        return this;
    }

    with(word) {
        this.vocable += ` ${word}`;
        return this;
    }

    get() {
        return this.vocable;
    }
}
