import { Stack } from "../../common/stack/stack";

function isValid(s: string): boolean {
    let st = new Stack()

    for (let i = 0; i < s.length; i++) {
        if (s[i] == "{" || s[i] == '[' || s[i] == '(') {
            st.push(s[i])
        } else{
            let pp = st.pop()
            if (s[i] == "}" && pp != "{" ) {
                return false
            }
            if (s[i] == ")" && pp != "(" ) {
                return false
            }
            if (s[i] == "]" && pp != "[" ) {
                return false
            }
        }
        
    }

    return st.len() == 0
}

console.log(isValid("{[()]}"))
console.log(isValid("([)]"))