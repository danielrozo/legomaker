
class Palette8BitGray extends Palette {

    static makePalette() {
        let ret = [];
        for (i = 0; i < 256; i++) {
            ret.push([new Color([i, i, i]), true]);   // Colors are always enabled at first
        }
        return ret;
    }
}

Palette8BitGray.palette = [];
Palette8BitGray.isColor = false;
