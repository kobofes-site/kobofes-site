# change directory to img/booth
Dir.chdir('img/booth')

# minify images with convert
Dir.glob('*').each do |img|
  `convert #{img} -strip -resize 320x320 #{'m_' + img}`
  puts "#{img} converted"
end
