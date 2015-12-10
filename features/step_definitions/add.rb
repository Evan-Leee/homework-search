Given(/^Open the homepage again$/) do
  @homepage = HomePage.new
  @homepage.load
  @number = @homepage.result
  sleep 2
end

Given(/^Click the button add$/) do
  @homepage.addBookmarks
end

Given(/^Input the "([^"]*)" and "([^"]*)"$/) do |bookmark,address|
  @homepage.input bookmark,address
end

Given(/^Click the button sure$/) do
  @homepage.makeSure
end

Given(/^Search "([^"]*)" again$/) do|search_content|
   @homepage.search search_content
end

Given(/^Add (\d+) bookmark$/) do |expect|
  expect(@homepage.result - @number).to eq expect.to_i
end
