import{E as f,j as s,k as l,l as i,m as p,y as u,F as m,x,G as v}from"./index.cb8bf5b3.js";import{_ as b}from"./plugin-vue_export-helper.21dcd24c.js";const w={data(){return{solution:[],loading:!1,unknown:!1,download:""}},methods:{downloadQuestion(){window.open(this.download,"_blank")},endalert(){this.$swal({icon:"warning",title:"Will be available after the time ends"})},getQuestionLink(){fetch(`${f}?type=examlist&id=${this.$route.params.id}`).then(r=>r.json()).then(r=>{var h;this.url="https://script.google.com/macros/s/AKfycbzOBSdG0T8p7OIhwx8FSVELW8OwReJ-hS-HBS09FT3abMJR6MEeUyGFjItGBoVJYLDCkQ/exec?sheet="+r.exam.exam.substr(39,44),this.download=(h=r.exam)!=null&&h.pdfsolve?`https://drive.google.com/thumbnail?id=${r.exam.pdfsolve.substr(32,33)}&export=download`:"";let g=JSON.parse(localStorage.getItem("physics_b_m24")).ttrx;fetch(this.url+"&type=check&phone="+g).then(d=>d.json()).then(d=>{d.message=="exists"||new Date(r.exam.end_time).getTime()<Date.now()?(fetch(this.url+"&type=question").then(n=>n.json()).then(n=>{n=n.map(e=>{if(e.question.includes("https://drive.google.com/file/d/")){let o=e.question.substr(32,33);e.question=`https://lh3.googleusercontent.com/d/${o}=w1000`}return e.a.includes("https://drive.google.com/file/d/")&&(e.a=e.a.replace("https://drive.google.com/file/d/","https://drive.google.com/uc?export=download&id=").substr(0,80).replace("/vie","")+"=w1000"),e.b.includes("https://drive.google.com/file/d/")&&(e.b=e.b.replace("https://drive.google.com/file/d/","https://drive.google.com/uc?export=download&id=").substr(0,80).replace("/vie","")+"=w1000"),e.c.includes("https://drive.google.com/file/d/")&&(e.c=e.c.replace("https://drive.google.com/file/d/","https://drive.google.com/uc?export=download&id=").substr(0,80).replace("/vie","")+"=w1000"),e.d.includes("https://drive.google.com/file/")&&(e.d=e.d.replace("https://drive.google.com/file/d/","https://drive.google.com/uc?export=download&id=").substr(0,80).replace("/vie","")),e.correct.includes("https://drive.google.com/file")&&(e.correct=e.correct.replace("https://drive.google.com/file/d/","https://drive.google.com/uc?export=download&id=").substr(0,80).replace("/vie","")),e.explain.includes("https://drive.google.com/file")&&(e.explain=e.explain.replace("https://drive.google.com/file/d/","https://drive.google.com/uc?export=download&id=").substr(0,80).replace("/vie","")),e}),fetch(this.url).then(e=>e.json()).then(e=>{let o=n.map((t,c)=>(t.total_ans=0,t.t_0=0,t.t_1=0,t.t_2=0,t.t_3=0,e.forEach(a=>{JSON.parse(a.submission).forEach(_=>{c==_.id&&(t[`t_${_.s}`]++,t.total_ans++)})}),t.per_a=t.t_0/t.total_ans*100||0,t.per_b=t.t_1/t.total_ans*100||0,t.per_c=t.t_2/t.total_ans*100||0,t.per_d=t.t_3/t.total_ans*100||0,t));this.solution=o})}),this.loading=!1):(this.$router.push("/"),this.unknown=!0)})})}},created(){this.getQuestionLink()}},y={key:0},k={key:0,class:"pb-10"},L={class:"py-4 text-center"},j={class:"text-2xl font-bold text-gray-800 poppins"},$={class:"mx-2 md:w-2/3 md:mx-auto print:text-black",ref:"content"},S=["href"],T=["src","alt"],M=["innerHTML"],E={class:"mt-3 space-y-2"},B=["src"],H=["innerHTML"],D={class:"text-sm print:hidden"},F={class:"print:hidden"},J={key:2,class:"my-2 poppins"},O=["src"],Q=["innerHTML"],C={key:1},G=i("h2",{class:"mt-10 text-2xl text-center"}," You must participate in the exam or you will not be able to view this solution untill time ends. ",-1),I=[G],N={key:1,class:"flex items-center justify-center w-full h-screen"},R=i("div",{class:"flex items-center justify-center -mt-24 space-x-1 text-sm text-gray-700"},[i("svg",{fill:"none",class:"w-10 h-10 animate-spin",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg"},[i("path",{"clip-rule":"evenodd",d:"M15.165 8.53a.5.5 0 01-.404.58A7 7 0 1023 16a.5.5 0 011 0 8 8 0 11-9.416-7.874.5.5 0 01.58.404z",fill:"currentColor","fill-rule":"evenodd"})]),i("div",{class:"text-lg"},"Loading ...")],-1),V=[R];function z(r,g,h,d,n,e){return n.solution.length>0?(s(),l("div",y,[n.unknown?(s(),l("div",C,I)):(s(),l("div",k,[i("div",L,[i("h1",j," Solution for Exam - "+p(this.$route.params.id),1)]),i("div",$,[n.download?(s(),l("a",{key:0,href:n.download,target:"_blank",class:"px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"},"Download Question",8,S)):u("",!0),(s(!0),l(m,null,x(n.solution,(o,t)=>(s(),l("div",{key:t,class:"p-5 mx-auto my-3 text-lg bg-white border border-gray-300 rounded-md shadow-lg print:border-none print:shadow-none print:p-1 kalpurush"},[o.question.includes("googleusercontent")?(s(),l("img",{key:0,src:o.question,alt:o.question,class:"object-contain w-full py-3"},null,8,T)):(s(),l("div",{key:1,class:"inline-flex print:text-black",innerHTML:`<span class='mr-2'>${t+1})</span>`+o.question},null,8,M)),i("div",E,[(s(),l(m,null,x(["a","b","c","d"],(c,a)=>i("div",{key:a,class:v(["flex flex-col p-3 rounded shadow",{" bg-green-300 print:border-gray-900":o[c]==o.correct}])},[o[c].includes("drive.google.com")?(s(),l("img",{key:0,src:o[c],class:"object-contain w-full py-3",alt:""},null,8,B)):(s(),l("div",{key:1,innerHTML:o[c]},null,8,H)),i("div",D,"Response: "+p(o[`t_${a}`])+" ("+p(parseInt(o[`per_${c}`]))+"%) ",1)],2)),64)),i("p",F,"Total Response: "+p(o.total_ans),1)]),o.explain?(s(),l("h2",J,"Explain:")):u("",!0),o.explain&&o.explain.includes("drive.google.com")?(s(),l("img",{key:3,src:o.question,class:"object-contain w-full py-3",alt:""},null,8,O)):o.explain?(s(),l("div",{key:4,class:"p-3 my-3 bg-gray-200 border border-green-500 rounded print:text-black",innerHTML:o.explain},null,8,Q)):u("",!0)]))),128))],512)]))])):(s(),l("div",N,V))}var K=b(w,[["render",z]]);export{K as default};
