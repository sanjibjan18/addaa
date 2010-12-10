Ext.setup({
	tabletStartupScreen: '/images/tablet_startup.png',
	phoneStartupScreen: '/images/phone_startup.png',
	icon: '/images/icon.png',
	glossOnIcon: true,

        onReady: function() {
           var toppanel;
           var bottompanel;
           var pulse;
           var neighbourhood;
           var tapri;
          
           space = { xtype:'spacer'}

           home = { 
                    title: "eelaka",
                    
                   }
         
           panel = new Ext.TabPanel({
           fullscreen:true,
           cardSwitchAnimation: 'slide',
           ui:'light',
           items:[home]
           });

           pulse = {
           title: 'Updates',
           iconCls: 'info',
           cls:'card card1',
           tpl:[
                '<tpl for=".">',
                '<div class="Updates" bgcolor="Red">',
                '<div class="avatar"><img src="{profile_image_url}" /></div>',
                   '<div class="update-content">',
                    '<h2>{from_user}</h2>',
                    '<p>{text}</p>',
                   '</div>',
                '</div>',
                '</tpl>'
               ]
           }
 
           neighbourhood = {
           title: 'Neighbourhood',
           iconCls: 'User',
           cls: 'card card2',
           tpl:[
                 '<tpl for=".">',
                 '<div class="Neighbourhood">',
                 '<div class="logo"><img src="{logo_image_url}" /></div>',
                    '<div class="neighbourhood-content">',
                        '<h2>{eelaka}</h2>',
                        '<p>{text}</p>',
                    '</div>',
                  '</div>',
                  '</tpl>'
                ]
            }

          hangout = {
           title: 'Hangout',
           iconCls: 'favorites',
           cls: 'card card3',
           tpl:[
                 '<tpl for=".">',
                 '<div class="Hangout">',
                 '<div class="logo"><img src="/images/icon.png" /></div>',
                    '<div class="hangout-content">',
                        '<h2>Borders</h2>',
                        '<p>Hangout with books here.</p>',
                    '</div>',
                  '</div>',
                  '</tpl>'
                ]
            }
           

           bottompanel = new Ext.TabPanel({
           fullscreen:true,
           tabBar: {
             dock: 'bottom',
             ui: 'light',
             layout: {
                 pack: 'center'
             }
           },
           cardSwitchAnimation:{ type:'slide',
                                 cover: true
                               },
           defaults: {
              scroll: 'vertical'
           },
           items:[pulse, neighbourhood, hangout]
           });
    
   
      }
});
