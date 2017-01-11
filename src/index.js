import 'babel-polyfill';

const a = async (s)=>{
  console.log(s);
};

(async ()=>{
  await a('hello');
})();
