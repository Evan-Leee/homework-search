Given(/^Open the homepage as usual$/) do
  @homepage = HomePage.new
  @homepage.load
  sleep 2
end

Given(/^Click the delete button behind the first bookmark$/) do
  @bookmark = @homepage.titleText
  @homepage.deleteBookmark
  
end

Given(/^Search the bookmark which you deleted$/) do
  @homepage.search @bookmark
end

Given(/^Get (\d+) result$/) do |expect|
  expect(@homepage.result).to eq expect.to_i
end
