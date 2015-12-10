Given(/^Open the homepage$/) do
  @homepage = HomePage.new
  @homepage.load
end

Given(/^Search "([^"]*)"$/) do |search_content|
   @homepage.search search_content
end

Given(/^Have (\d+) result$/) do |expect|
  expect(@homepage.result).to eq expect.to_i
end