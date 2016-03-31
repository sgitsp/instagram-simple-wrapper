try{
Typekit.load();
}
catch(e){}
var feed=new Instafeed({
    get:'user',
    userId:577210186,
    accessToken:'577210186.8046de1.b57e8fd1fcbf4ee3a8d95bde49b5f151',
    target:'instagram',
    resolution:'standard_resolution',
    after:function(){
      var el=document.getElementById('instagram');
      if(el.classList)el.classList.add('show');
      else el.className+=' '+'show';
    }
  });
window.onload=function(){
    feed.run();
    var _gauges=_gauges||[];(function(){
      var t=document.createElement('script');
      t.type='text/javascript';
      t.async=true;t.id='gauges-tracker';
      t.setAttribute('data-site-id','');
      t.src='//secure.gaug.es/track.js';
      var s=document.getElementsByTagName('script')[0];
      s.parentNode.insertBefore(t,s);
     }
  )();
};
