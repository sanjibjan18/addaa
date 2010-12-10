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

           pulse = new Ext.TabPanel({
           title: 'Updates',
           iconCls: 'info',
           cls:'card card1',
           scroll: 'vertical'
           });

           neigbourhood = new Ext.TabPanel({
           title: 'Neighbourhood',
           iconCls: 'info',
           cls: 'card card2',
           scroll: 'vertical'
            });
           

           bottompanel = new Ext.TabPanel({
           fullscreen:true,
           tabBar: {
           dock: 'bottom',
           ui: 'light',
           layout: {
               pack: 'center'
                   }
           },
           cardSwitchAnimation: 'slide',
           items: [{title:'Updates',iconCls: 'info'}, {title:'Neighbourhood', iconCls: 'User'}]
           });
    
   
      }
});
