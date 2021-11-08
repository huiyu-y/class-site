$('#widget').width(700).height(400).split({
  orientation: 'vertical',
  limit: 100,
  position: '70%',
  percent: true
});

$("#bb").click(function() {
  $('#foo').split({
    orientation: 'horizontal',
    limit: 10,
    percent: true
  });
  $('#a').split({
    orientation: 'vertical',
    limit: 10,
    percent: true
  });
});
