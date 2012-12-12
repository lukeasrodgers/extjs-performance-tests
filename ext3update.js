Ext.onReady(function() {
  console.log('ext ready');
  var vp = new Ext.Viewport({
    items: [
      {
        xtype: 'textarea', enableKeyEvents: true,
        listeners: {
          keyup: function(t, e) {
            var text = t.getValue();
            Ext.getCmp('updated').update({length: text.length});
          }
        }
      },
      {
        html: '<a href="#" id="updater">Click here to update</a>',
        listeners: {
          render: function() {
            this.getEl().on('click', function() {
              Ext.getCmp('updated').update({name: 'jimbo', age: 30});
            }, this, { delegate: '#updater', stopEvent: true});
          }
        }
      },
      {
        id: 'updated',
        data: {length: 0},
        tpl: 'Length: {length}'
      }
    ]
  });
});
