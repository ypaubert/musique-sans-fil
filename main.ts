
namespace EmetteurRadioMIDI {
    /**
    * Emet des notes MIDI par radio
      */
    //% block
    export function Jouer_la_note_par_radio (canalmidi: number, notemidi: number) {
        radio.setGroup(1)
        radio.sendNumber(1000 * canalmidi + notemidi)
    }
    //% block
    export function Arreter_la_note_par_radio (canalmidi: number, notemidi: number) {
        radio.setGroup(1)
        radio.sendNumber(1000 * canalmidi + notemidi)
    }
}