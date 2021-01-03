document.addEventListener('DOMContentLoaded', function (){

  // フォントの更新
  const fontDOMs = document.getElementsByName('font');
  const preview  = document.querySelector('.main__preview--table');
  const serifBtn = document.getElementById('serif-label');
  const sans_serifBtn = document.getElementById('sans-serif-label');

  fontDOMs.forEach( (fontDOM)=> {
    fontDOM.addEventListener('change', ()=>{
      if ( fontDOM.value === '0' ){
        sans_serifBtn.classList.add('selected');
        serifBtn.classList.remove('selected');
        preview.classList.add('sans-serif');
        preview.classList.remove('serif');
      }
      else if( fontDOM.value === '1'){
        serifBtn.classList.add('selected');
        sans_serifBtn.classList.remove('selected');
        preview.classList.add('serif');
        preview.classList.remove('sans-serif');
      }else{
      }
    });
  });

  // 背表紙の縦書き、横書き
  const verticalDOMs = document.getElementsByName('title_vertical');
  const verticalBtn = document.getElementById('vertical-label');
  const sidewayBtn = document.getElementById('sideway-label');
  const wordDOMs = document.querySelectorAll('.title__td div');

  verticalDOMs.forEach( (verticalDOM)=>{
    verticalDOM.addEventListener('change', ()=>{
      if ( verticalDOM.value === 'true'){
        verticalBtn.classList.add('selected');
        sidewayBtn.classList.remove('selected');
        wordDOMs.forEach( (word)=>{
          word.classList.remove('sideway');
        });
      }else if ( verticalDOM.value === 'false'){
        sidewayBtn.classList.add('selected');
        verticalBtn.classList.remove('selected');
        wordDOMs.forEach((word)=>{
          word.classList.add('sideway');
        })
      }else{

      }
    })
  })

  // titleのpreviewの更新
  const title_form    = document.getElementById('title');
  const title_preview = document.getElementById('front-title');
  title_form.addEventListener('input', (e)=>{
    const title = e.target.value;
    title_preview.textContent = title;
  });

  // 背表紙のタイトルの更新
  const back_title_form    = document.getElementById('back_title');
  const back_title_preview = document.getElementsByClassName('title__td')[0];
  back_title_form.addEventListener('input', (e)=>{
    const back_title       = e.target.value;
    const back_title_split = back_title.split('');

    let html = '';
    back_title_split.forEach( (word)=> {
      html += `<div>${word}</div>`;
    });

    back_title_preview.innerHTML = html;
  });

  // タイトルの文字のサイズ
  const font_size_form = document.getElementById('title_font_size');
  font_size_form.addEventListener('input', (e)=>{
    const fixed_size = 1 + parseFloat(e.target.value) / 5
    const font_size = `${fixed_size}rem`;
    title_preview.style.fontSize = font_size;
  });

  // 文字の色
  const font_color_form = document.getElementById('font_color');
  font_color_form.addEventListener('input', (e)=>{
    const font_color = e.target.value;
    title_preview.style.color = font_color;
    back_title_preview.querySelectorAll('div').forEach((word)=>{
      word.style.color = font_color;
    })
    document.getElementsByClassName('front-number__span')[0].style.color = font_color;
    document.getElementsByClassName('back-number__span')[0].style.color = font_color;

  });

  // 背景色
  const background_color_form = document.getElementById('back_ground_color');
  background_color_form.addEventListener('input', (e)=>{
    const background_color = e.target.value;
    const table = document.getElementsByClassName('preview')[0];
    table.style.background = background_color;
  });

  // 線の色
  const border_color_form = document.getElementById('border_color');
  border_color_form.addEventListener('input', (e)=>{
    const border_color = e.target.value;
    const title_border = document.getElementsByClassName('title__block')[0];
    const back_border = document.getElementsByClassName('back-number__block')[0];
    title_border.style.borderColor = border_color;
    back_border.style.borderColor = border_color;
  });

  // 表紙の幅
  const width_of_front_form = document.getElementById('width_of_front');
  width_of_front_form.addEventListener('input', (e)=>{
    const width_of_front = (Number(e.target.value) - 2) * 15;
    console.log(width_of_front);
    const front_width_preview = document.getElementsByClassName('front-cover')[0];
    front_width_preview.style.width = toString(width_of_front) + 'px';
  });

});