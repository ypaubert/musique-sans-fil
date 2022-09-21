
namespace EmetteurRadioMIDI {
    /**
    * Emet des notes MIDI par radio
      */
    //% block
    export function Jouer_par_radio_canal_note (canalmidi: number, notemidi: number) {
        radio.setGroup(1)
        radio.sendNumber(1000 * canalmidi + notemidi)
    }
    //% block
    export function Arreter_par_radio_canal_note (canalmidi: number, notemidi: number) {
        radio.setGroup(1)
        radio.sendNumber(1000 * canalmidi + notemidi)
    }
}