const RAL_DB = [
    {n:"RAL 1013", h:"#EAE6D1"}, {n:"RAL 1015", h:"#E6D6B0"}, {n:"RAL 7016", h:"#383E42"}, 
    {n:"RAL 7035", h:"#D7D7D7"}, {n:"RAL 9010", h:"#F1F0E8"}, {n:"RAL 5000", h:"#1E213D"}
    // Qui aggiungeremo il database completo in futuro
];

const canvas = document.getElementById('imageCanvas');
const ctx = canvas.getContext('2d');
const loader = document.getElementById('imageLoader');

loader.onchange = (e) => {
    const img = new Image();
    img.onload = () => {
        canvas.width = 1000;
        canvas.height = img.height * (1000 / img.width);
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    };
    img.src = URL.createObjectURL(e.target.files[0]);
};

canvas.onclick = (e) => {
    const r = canvas.getBoundingClientRect();
    const x = (e.clientX - r.left) * (canvas.width / r.width);
    const y = (e.clientY - r.top) * (canvas.height / r.height);
    const p = ctx.getImageData(x-5, y-5, 10, 10).data;
    
    let rgb = {r:0, g:0, b:0};
    for(let i=0; i<p.length; i+=4) { rgb.r+=p[i]; rgb.g+=p[i+1]; rgb.b+=p[i+2]; }
    const count = p.length/4;
    analyze(Math.round(rgb.r/count), Math.round(rgb.g/count), Math.round(rgb.b/count));
};

function analyze(r, g, b) {
    const matches = RAL_DB.map(c => {
        const target = hexToRgb(c.h);
        const dist = Math.sqrt(Math.pow(r-target.r,2)+Math.pow(g-target.g,2)+Math.pow(b-target.b,2));
        return { ...c, dist };
    }).sort((a,b) => a.dist - b.dist).slice(0, 3);

    document.getElementById('results').innerHTML = matches.map(m => `
        <div class="ral-card">
            <div class="color-swatch" style="background:${m.h}"></div>
            <b>${m.n}</b><br><small>${Math.round(100 - m.dist/3)}%</small>
        </div>
    `).join('');
}

function hexToRgb(h) {
    const res = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(h);
    return res ? {r:parseInt(res[1],16), g:parseInt(res[2],16), b:parseInt(res[3],16)} : null;
}
