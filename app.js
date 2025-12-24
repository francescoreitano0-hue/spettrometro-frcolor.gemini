const RAL_DB = [
    {n:"RAL 1000", h:"#BEBD7F"}, {n:"RAL 1001", h:"#C2B078"}, {n:"RAL 1002", h:"#C6A664"}, {n:"RAL 1003", h:"#E5BE01"}, {n:"RAL 1004", h:"#CDA434"}, {n:"RAL 1005", h:"#A98307"}, {n:"RAL 1006", h:"#E4A010"}, {n:"RAL 1007", h:"#DC9206"}, {n:"RAL 1011", h:"#8A6642"}, {n:"RAL 1012", h:"#C7B446"}, {n:"RAL 1013", h:"#EAE6D1"}, {n:"RAL 1014", h:"#D1BC8A"}, {n:"RAL 1015", h:"#E6D6B0"}, {n:"RAL 1016", h:"#F1DD38"}, {n:"RAL 1017", h:"#F6B458"}, {n:"RAL 1018", h:"#F8F32B"}, {n:"RAL 1019", h:"#A48F7A"}, {n:"RAL 1020", h:"#968964"}, {n:"RAL 1021", h:"#F2AD00"}, {n:"RAL 1023", h:"#F7B500"}, {n:"RAL 1024", h:"#A58454"}, {n:"RAL 1027", h:"#826C34"}, {n:"RAL 1028", h:"#FF9900"}, {n:"RAL 1032", h:"#C49102"}, {n:"RAL 1033", h:"#E68E11"}, {n:"RAL 1034", h:"#EBA060"}, {n:"RAL 1037", h:"#F39B1B"},
    {n:"RAL 2000", h:"#DA6E00"}, {n:"RAL 2001", h:"#BC4E11"}, {n:"RAL 2002", h:"#B83C1C"}, {n:"RAL 2003", h:"#F67828"}, {n:"RAL 2004", h:"#E75B12"}, {n:"RAL 2008", h:"#F3752C"}, {n:"RAL 2009", h:"#E15501"}, {n:"RAL 2010", h:"#D4652F"}, {n:"RAL 2011", h:"#EC7C25"}, {n:"RAL 2012", h:"#E55137"},
    {n:"RAL 3000", h:"#AF2B1E"}, {n:"RAL 3001", h:"#A02010"}, {n:"RAL 3002", h:"#A12018"}, {n:"RAL 3003", h:"#8D1D18"}, {n:"RAL 3004", h:"#6D1D18"}, {n:"RAL 3005", h:"#5B1616"}, {n:"RAL 3007", h:"#2F1412"}, {n:"RAL 3009", h:"#642424"}, {n:"RAL 3011", h:"#791F1E"}, {n:"RAL 3012", h:"#C68872"}, {n:"RAL 3013", h:"#972C24"}, {n:"RAL 3014", h:"#D16B74"}, {n:"RAL 3015", h:"#E4A0AC"}, {n:"RAL 3016", h:"#A64439"}, {n:"RAL 3017", h:"#D1495B"}, {n:"RAL 3018", h:"#D13F4A"}, {n:"RAL 3020", h:"#C1121C"}, {n:"RAL 3022", h:"#D4654A"}, {n:"RAL 3027", h:"#B42041"}, {n:"RAL 3031", h:"#AC323B"},
    {n:"RAL 4001", h:"#8D5A99"}, {n:"RAL 4002", h:"#912C32"}, {n:"RAL 4003", h:"#D65487"}, {n:"RAL 4004", h:"#691639"}, {n:"RAL 4005", h:"#6C4675"}, {n:"RAL 4006", h:"#992572"}, {n:"RAL 4007", h:"#4A192C"}, {n:"RAL 4008", h:"#8F4977"}, {n:"RAL 4009", h:"#A18594"}, {n:"RAL 4010", h:"#D15B8F"},
    {n:"RAL 5000", h:"#354D73"}, {n:"RAL 5001", h:"#1D334A"}, {n:"RAL 5002", h:"#20214F"}, {n:"RAL 5003", h:"#1B2A3E"}, {n:"RAL 5004", h:"#1D1F2A"}, {n:"RAL 5005", h:"#1E2460"}, {n:"RAL 5007", h:"#3E5F8A"}, {n:"RAL 5008", h:"#26252D"}, {n:"RAL 5009", h:"#025669"}, {n:"RAL 5010", h:"#0E467A"}, {n:"RAL 5011", h:"#1B1E2D"}, {n:"RAL 5012", h:"#3481B8"}, {n:"RAL 5013", h:"#1C1C4C"}, {n:"RAL 5014", h:"#606E8C"}, {n:"RAL 5015", h:"#2271B3"}, {n:"RAL 5017", h:"#063971"}, {n:"RAL 5018", h:"#3F888F"}, {n:"RAL 5019", h:"#1B5583"}, {n:"RAL 5020", h:"#1D334A"}, {n:"RAL 5021", h:"#256D7B"}, {n:"RAL 5022", h:"#252850"}, {n:"RAL 5023", h:"#49678D"}, {n:"RAL 5024", h:"#5D9B91"},
    {n:"RAL 6000", h:"#316650"}, {n:"RAL 6001", h:"#287233"}, {n:"RAL 6002", h:"#2D572C"}, {n:"RAL 6003", h:"#424632"}, {n:"RAL 6004", h:"#1F3A3D"}, {n:"RAL 6005", h:"#2F4538"}, {n:"RAL 6006", h:"#3E3B32"}, {n:"RAL 6007", h:"#343B29"}, {n:"RAL 6008", h:"#39352A"}, {n:"RAL 6009", h:"#31372B"}, {n:"RAL 6010", h:"#35682D"}, {n:"RAL 6011", h:"#688264"}, {n:"RAL 6012", h:"#343E40"}, {n:"RAL 6013", h:"#767767"}, {n:"RAL 6014", h:"#47402E"}, {n:"RAL 6015", h:"#3D4035"}, {n:"RAL 6016", h:"#1B542C"}, {n:"RAL 6017", h:"#587246"}, {n:"RAL 6018", h:"#57A639"}, {n:"RAL 6019", h:"#BDE1C4"}, {n:"RAL 6020", h:"#2E3B28"}, {n:"RAL 6021", h:"#89AC76"}, {n:"RAL 6022", h:"#25221B"}, {n:"RAL 6024", h:"#308446"}, {n:"RAL 6025", h:"#3D642D"}, {n:"RAL 6026", h:"#015D52"}, {n:"RAL 6027", h:"#84C3BE"}, {n:"RAL 6028", h:"#2D554C"}, {n:"RAL 6029", h:"#1E6032"}, {n:"RAL 6032", h:"#317F43"}, {n:"RAL 6033", h:"#497E76"}, {n:"RAL 6034", h:"#7FB5B5"},
    {n:"RAL 7000", h:"#78858B"}, {n:"RAL 7001", h:"#8A9597"}, {n:"RAL 7002", h:"#7E7B52"}, {n:"RAL 7003", h:"#6C7059"}, {n:"RAL 7004", h:"#969992"}, {n:"RAL 7005", h:"#646B63"}, {n:"RAL 7006", h:"#6D6552"}, {n:"RAL 7008", h:"#6A5F31"}, {n:"RAL 7009", h:"#4D5645"}, {n:"RAL 7010", h:"#4C514A"}, {n:"RAL 7011", h:"#434B4D"}, {n:"RAL 7012", h:"#4E5754"}, {n:"RAL 7013", h:"#464531"}, {n:"RAL 7015", h:"#434750"}, {n:"RAL 7016", h:"#2F353B"}, {n:"RAL 7021", h:"#23282B"}, {n:"RAL 7022", h:"#332F2C"}, {n:"RAL 7023", h:"#686C5E"}, {n:"RAL 7024", h:"#474A51"}, {n:"RAL 7026", h:"#2F3D3E"}, {n:"RAL 7030", h:"#7E8B92"}, {n:"RAL 7031", h:"#474B4E"}, {n:"RAL 7032", h:"#B8B799"}, {n:"RAL 7033", h:"#7D8471"}, {n:"RAL 7034", h:"#8F8B66"}, {n:"RAL 7035", h:"#D7D7D7"}, {n:"RAL 7036", h:"#7F7679"}, {n:"RAL 7037", h:"#7D7575"}, {n:"RAL 7038", h:"#B5B8B1"}, {n:"RAL 7039", h:"#6C6960"}, {n:"RAL 7040", h:"#9DA1AA"}, {n:"RAL 7042", h:"#8D9499"}, {n:"RAL 7043", h:"#4E5452"}, {n:"RAL 7044", h:"#B9B4AB"}, {n:"RAL 7045", h:"#909090"}, {n:"RAL 7046", h:"#82898E"}, {n:"RAL 7047", h:"#D0D0D0"},
    {n:"RAL 8000", h:"#826C34"}, {n:"RAL 8001", h:"#955F20"}, {n:"RAL 8002", h:"#6D3F31"}, {n:"RAL 8003", h:"#734222"}, {n:"RAL 8004", h:"#8E402A"}, {n:"RAL 8007", h:"#59351F"}, {n:"RAL 8008", h:"#6F4F28"}, {n:"RAL 8011", h:"#5B3A29"}, {n:"RAL 8012", h:"#592321"}, {n:"RAL 8014", h:"#382C1E"}, {n:"RAL 8015", h:"#632A23"}, {n:"RAL 8016", h:"#4C2F27"}, {n:"RAL 8017", h:"#44322D"}, {n:"RAL 8019", h:"#3F3A3A"}, {n:"RAL 8022", h:"#1D1F1F"}, {n:"RAL 8023", h:"#A65E2E"}, {n:"RAL 8024", h:"#79553D"}, {n:"RAL 8025", h:"#755C48"}, {n:"RAL 8028", h:"#4E3B31"},
    {n:"RAL 9001", h:"#FDF4E3"}, {n:"RAL 9002", h:"#E7EBDA"}, {n:"RAL 9003", h:"#F4F4F4"}, {n:"RAL 9004", h:"#282828"}, {n:"RAL 9005", h:"#0A0A0A"}, {n:"RAL 9006", h:"#A5A5A5"}, {n:"RAL 9007", h:"#8F8F8F"}, {n:"RAL 9010", h:"#F1F0E8"}, {n:"RAL 9011", h:"#1C1C1C"}, {n:"RAL 9016", h:"#F6F6F6"}, {n:"RAL 9017", h:"#1E1E1E"}, {n:"RAL 9018", h:"#D7D7D7"}
];

const canvas = document.getElementById('imageCanvas');
const ctx = canvas.getContext('2d');
const cameraInput = document.getElementById('cameraInput');
const galleryInput = document.getElementById('galleryInput');
const clearBtn = document.getElementById('clearBtn');

function handleImage(e) {
    const file = e.target.files[0];
    if(!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
        const img = new Image();
        img.onload = () => {
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0);
            document.getElementById('hint').innerText = "TOCCA IL MURO NELLA FOTO";
        };
        img.src = ev.target.result;
    };
    reader.readAsDataURL(file);
}

cameraInput.onchange = handleImage;
galleryInput.onchange = handleImage;

clearBtn.onclick = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    document.getElementById('results').innerHTML = "";
    document.getElementById('hint').innerText = "Scegli come acquisire il colore";
};

canvas.addEventListener('click', (e) => {
    const rect = canvas.getBoundingClientRect();
    const x = (e.clientX - rect.left) * (canvas.width / rect.width);
    const y = (e.clientY - rect.top) * (canvas.height / rect.height);
    const p = ctx.getImageData(x - 7, y - 7, 15, 15).data; // Campione UHD 15x15
    let r=0, g=0, b=0, count=0;
    for(let i=0; i < p.length; i += 4){ r += p[i]; g += p[i+1]; b += p[i+2]; count++; }
    analyze(Math.round(r/count), Math.round(g/count), Math.round(b/count));
});

function analyze(r, g, b) {
    const matches = RAL_DB.map(c => {
        const t = hexToRgb(c.h);
        const dist = Math.sqrt(Math.pow((r-t.r)*0.3,2)+Math.pow((g-t.g)*0.59,2)+Math.pow((b-t.b)*0.11,2));
        return { ...c, dist };
    }).sort((a,b) => a.dist - b.dist).slice(0, 3);

    document.getElementById('results').innerHTML = matches.map(m => `
        <div class="ral-card">
            <div class="color-swatch" style="background:${m.h}"></div>
            <strong>${m.n}</strong><br>
            <small>Match: ${Math.max(0, Math.round(100 - m.dist/2.5))}%</small>
        </div>
    `).join('');
}

function hexToRgb(h) {
    const res = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(h);
    return res ? {r:parseInt(res[1],16), g:parseInt(res[2],16), b:parseInt(res[3],16)} : null;
}
