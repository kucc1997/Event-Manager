import { FormControl } from '@angular/forms'

//Creating a custom validator. Custom validator is nothing but a function.
//Below the function restrictedWOrds takes FormControl as a parameter,
// and returns basic javascript object.
//This is now reusable after we included for export in barrel and
//will import to any necessary component through barrer /shared/index

export function restrictedWords(words){
     return (control:FormControl):{[key: string]: any} =>{
            if (!words) return null

            var invalidWords = words
            .map(w => control.value.includes(w) ? w : null)
            .filter(w=> w != null)

            return invalidWords && invalidWords.length >0 
                ? {'restrictedWords': invalidWords.join(',')}
                : null
        }
    }