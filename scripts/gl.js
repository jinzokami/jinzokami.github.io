main();

function main() {
    const canvas = document.querySelector("#glCanvas");
    const gl = canvas.getContext("webgl");
    const vert_src = fetch('./scripts/shader.vert').then(response => response.text()).then((data) => {console.log(data)});
    const frag_src = fetch('./scripts/shader.frag').then(response => response.text()).then((data) => {console.log(data)});
    const shader_program = shader_init(gl, vert_src, frag_src);

    if (gl == null) {
        alert("Could not Init WebGL. Your browser or device may not support it.");
        return;
    }

    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);
}

function shader_init(gl, vert_src, frag_src) {
    const vshader = load_shader(gl, gl.VERTEX_SHADER, vert_src);
    const fshader = load_shader(gl, gl.FRAGMENT_SHADER, frag_src);

    const shader_program = gl.createProgram();
    gl.attachShader(shader_program, vshader);
    gl.attachShader(shader_program, fshader);
    gl.linkProgram(shader_program);

    if(!gl.getProgramParameter(shader_program, gl.LINK_STATUS)){
        alert('Unable to init shader: ' + gl.getProgramInfoLog(shader_program));
        return null;
    }

    return shader_program;
}

function load_shader(gl, type, source)
{
    const shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);

    if(!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        alert('An error Occured during shader compilation: ' + gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
    }

    return shader;
}