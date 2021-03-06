// TODO: rather than sort/access by puzzle index, we access puzzles by their unique name instead
// --> maybe just make this an object with names as keys then?

export const puzzles = [
    {
        name: 'id',
        source: 'function id(x) {\n    return x;\n}'
    },
    {
        name: 'reflexive',
        source: `function reflexive(x) {\n    return x != x;\n}`
    },
    {
        name: 'transitive',
        source: `function transitive(x,y,z) {\n    return x && x == y && y == z && x != z;\n}`
    },
    {
        name: 'counter',
        source: `function counter(f) {\n    var a = f(), b = f()\n    return a() == 1 && a() == 2 && a() == 3\n        && b() == 1 && b() == 2;\n}`
    },
    {
        name: 'infinity',
        source: `function infinity(x, y) {\n    return x === y && 1/x < 1/y \n}`
    },
    {
        name: 'peano',
        source: `function peano(x) {\n    return (x++ !== x) && (x++ === x);\n}`
    },
    {
        name: 'array',
        source: `function array(x,y) {\n    return Array.isArray(x) && !(x instanceof Array) &&\n          !Array.isArray(y) &&  (y instanceof Array);\n}`
    },
    {
        name: 'instance',
        source: `function instance(x,y) {\n    return x instanceof y && y instanceof x && x !== y;\n}`
    },
    {
        name: 'proto1',
        source: `function proto1(x) {\n    return x && !("__proto__" in x);\n}`
    },
    {
        name: 'undef',
        source: `function undef(x) {\n    return !{ undefined: { undefined: 1 } }[typeof x][x];\n}`
    },
    {
        name: 'symmetric',
        source: `function symmetric(x,y) {\n    return x == y && y != x;\n}`
    },
    {
        name: 'ouroborobj',
        source: `function ouroborobj(x) {\n    return x in x;\n}`
    },
    {
        name: 'truth',
        source: `function truth(x) {\n    return x.valueOf() && !x;\n}`
    },
    {
        name: 'wat',
        source: `function wat(x) {\n    return x('hello') == 'world:)' && !x;\n}`
    },
    {
        name: 'evil1',
        source: `var eval = window.eval;\nfunction evil1(x) {\n    return eval(x+'(x)') && !eval(x)(x);\n}`
    },
    {
        name: 'evil2',
        source: `var eval = window.eval;\nfunction evil2(x) {\n    return eval('('+x+')(x)') && !eval(x)(x);\n}`
    },
    {
        name: 'random1',
        source: `function random1(x) {\n    return Math.random() in x;\n}`
    },
    {
        name: 'random2',
        source: `var rand = Math.random();\nfunction random2(x) {\n    return rand in x;\n}`
    },
    {
        name: 'random3',
        source: `var key = crypto.getRandomValues(new Uint32Array(4));\nfunction random3(x) {\n    var d = 0;\n    for (var i=0; i<key.length; i++) {\n        d |= key[i] ^ x[i];\n    }\n    return d === 0;\n}`
    },
    {
        name: 'random4',
        source: `var rand = Math.random();\nfunction random4(x) {\n    return rand === x;\n}`
    },
    {
        name: 'letsgo',
        source: `function letsgo(x) {\n    let a = let \`abc\`;\n    return \`abc\` === a;\n}`
    },
    {
        name: 'closure',
        source: `function closure(x) {\n    return x[x] == x;\n}`
    },
    {
        name: 'native',
        source: `const toString = Function.prototype.toString;\nfunction native(x) {\n    return (x() === 1) && (x.toString() === 'function () { [native code] }') && (toString.call(x) === x.toString())\n}`
    },
    {
        name: 'stringable',
        source: `function stringable(s) {\n    try {\n      '' + s;\n    } catch (e) {\n      return String(s) == s.toString();\n    }\n}`
    },
    {
        name: 'thaw',
        source: `function thaw(unfreeze) {\n    var obj = {x: 1};\n    Object.freeze(obj);\n    unfreeze(obj);\n    return obj.x !== 1;\n}`
    },
    {
        name: 'thaw2',
        source: `var freeze = Object.freeze;\nfunction thaw2(unfreeze, k) {\n    var obj = {};\n    obj[k] = 1;\n    freeze(obj);\n    unfreeze(obj);\n    return obj[k] !== 1;\n}`
    },
    {
        name: 'thaw3',
        source: `var freeze = Object.freeze;\nfunction thaw3(unfreeze, obj) {\n    obj.x = 1;\n    freeze(obj);\n    unfreeze(obj);\n    return 'x' in obj && obj.x !== 1;\n}`
    },
    {
        name: 'total',
        source: `function total(x) {\n    return (x < x) && (x == x) && (x > x);\n}`
    },
    {
        name: 'countOnMe',
        source: `function countOnMe(x) {\n    if (!(x instanceof Array))\n        throw 'x must be an array.';\n\n    for (var i = 0; i < 20; i++) {\n      if (x[i] != i) {\n          throw 'x must contain the numbers 0-19 in order';\n      }\n    }\n\n    return true;\n}`
    },
    {
        name: 'countOnMe2',
        source: `function countOnMe2(x) {\n    if (!(x instanceof Array))\n        throw 'x must be an array.';\n\n    for (var i = 0; i < 1000; i++) {\n      if (x[i] !== i) {\n          throw 'x must contain the numbers 0-999 in order';\n      }\n    }\n\n    return true;\n}`
    },
];