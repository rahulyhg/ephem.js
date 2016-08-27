/* autogenerated by webmerge (compile context) */
;
var vsop87b={};
(function(){if(typeof window.vsop87!=="function")window.vsop87=function vsop87(coeffs,time){var t=time/1E3,result={},u,cu,tt=[0,1,t,t*t];tt[4]=tt[3]*t,tt[5]=tt[4]*t,tt[6]=tt[5]*t;var main="a"in coeffs;for(var v in coeffs){result[v]=0;if(!main)result["v"+v]=0;for(var it=0,sum=0,dsum=0;it<coeffs[v].length;it+=1){var pow_sum=0,dpow_sum=0,coeff=coeffs[v][it];for(var i=0,cl=coeff.length;i<cl;i+=3){var a=coeff[i+0],b=coeff[i+1],c=coeff[i+2];u=b+c*t,cu=Math.cos(u);pow_sum+=a*cu*tt[it+1];if(!main)dpow_sum+=tt[it]*
it*a*cu-tt[it+1]*a*c*Math.sin(u)}result[v]+=pow_sum;if(!main)result["v"+v]+=dpow_sum/365250}}if("L"in result){result.L=result.L%(Math.PI*2);if(result.L<0)result.L+=Math.PI*2}if("l"in result){result.l=result.l%(Math.PI*2);if(result.l<0)result.l+=Math.PI*2}if("b"in result){result.n=result.n%(Math.PI*2);if(result.n<0)result.n+=Math.PI*2}return result}})();
(function(vsop87b){function vsop87b_mer(jy){return vsop87(vsop87b_mer.coeffs,jy)}vsop87b_mer.coeffs={l:[[4.40250710144,0,0,.40989414977,1.48302034195,26087.9031415742,.050462942,4.47785489551,52175.8062831484],[26087.9031368553,0,0,.01131199811,6.21874197797,26087.9031415742]],b:[[.11737528961,1.98357498767,26087.9031415742,.02388076996,5.03738959686,52175.8062831484,.01222839532,3.14159265359,0]],r:[[.39528271651,0,0,.07834131818,6.19233722598,26087.9031415742]]};vsop87b.mer=vsop87b_mer;function vsop87b_ven(jy){return vsop87(vsop87b_ven.coeffs,
jy)}vsop87b_ven.coeffs={l:[[3.17614666774,0,0,.01353968419,5.59313319619,10213.285546211],[10213.2855462164,0,0]],b:[[.05923638472,.26702775812,10213.285546211]],r:[[.72334820891,0,0]]};vsop87b.ven=vsop87b_ven;function vsop87b_ear(jy){return vsop87(vsop87b_ear.coeffs,jy)}vsop87b_ear.coeffs={l:[[1.75347045673,0,0,.03341656453,4.66925680415,6283.0758499914],[6283.0758499914,0,0]],b:[[2.7962E-6,3.19870156017,84334.6615813083]],r:[[1.00013988784,0,0,.01670699632,3.09846350258,6283.0758499914]]};vsop87b.ear=
vsop87b_ear;function vsop87b_mar(jy){return vsop87(vsop87b_mar.coeffs,jy)}vsop87b_mar.coeffs={l:[[6.20347711581,0,0,.18656368093,5.0503710027,3340.6124266998,.01108216816,5.40099836344,6681.2248533996],[3340.61242700512,0,0,.01457554523,3.60433733236,3340.6124266998]],b:[[.03197134986,3.76832042431,3340.6124266998]],r:[[1.53033488271,0,0,.1418495316,3.47971283528,3340.6124266998],[.01107433345,2.03250524857,3340.6124266998]]};vsop87b.mar=vsop87b_mar;function vsop87b_jup(jy){return vsop87(vsop87b_jup.coeffs,
jy)}vsop87b_jup.coeffs={l:[[.59954691494,0,0,.09695898719,5.06191793158,529.6909650946],[529.69096508814,0,0]],b:[[.02268615702,3.55852606721,529.6909650946]],r:[[5.20887429326,0,0,.25209327119,3.49108639871,529.6909650946],[.0127180152,2.64937512894,529.6909650946]]};vsop87b.jup=vsop87b_jup;function vsop87b_sat(jy){return vsop87(vsop87b_sat.coeffs,jy)}vsop87b_sat.coeffs={l:[[.87401354025,0,0,.11107659762,3.96205090159,213.299095438,.01414150957,4.58581516874,7.1135470008],[213.2990952169,0,0,.01297370862,
1.82834923978,213.299095438]],b:[[.04330678039,3.60284428399,213.299095438]],r:[[9.55758135486,0,0,.52921382865,2.39226219573,213.299095438,.01873679867,5.2354960466,206.1855484372,.01464663929,1.64763042902,426.598190876],[.0618298134,.2584351148,213.299095438]]};vsop87b.sat=vsop87b_sat;function vsop87b_ura(jy){return vsop87(vsop87b_ura.coeffs,jy)}vsop87b_ura.coeffs={l:[[5.48129294297,0,0,.09260408234,.89106421507,74.7815985673,.01504247898,3.6271926092,1.4844727083],[74.7815986091,0,0]],b:[[.01346277648,
2.61877810547,74.7815985673]],r:[[19.21264847206,0,0,.88784984413,5.60377527014,74.7815985673,.03440836062,.32836099706,73.297125859,.0205565386,1.7829515933,149.5631971346],[.01479896629,3.67205697578,74.7815985673]]};vsop87b.ura=vsop87b_ura;function vsop87b_nep(jy){return vsop87(vsop87b_nep.coeffs,jy)}vsop87b_nep.coeffs={l:[[5.31188633046,0,0,.0179847553,2.9010127389,38.1330356378,.01019727652,.48580922867,1.4844727083],[38.13303563957,0,0]],b:[[.03088622933,1.44104372644,38.1330356378]],r:[[30.07013205828,
0,0,.27062259632,1.32999459377,38.1330356378,.01691764014,3.25186135653,36.6485629295]]};vsop87b.nep=vsop87b_nep})(vsop87b);

/* crc: CBCBC61228A92E970F0271301720C11C */
