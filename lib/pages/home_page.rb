class ResultSection < SitePrism::Section
    element :title, 'span.title'
    element :delete, '.delete'
end	

class HomePage < SitePrism::Page
	set_url '/'

	element :keyword, '#search'
	element :add, 'button.add'
	element :bookmark, '#bookmark'
	element :address, '#address'
	element :sure, '#add'
	element :number, '.content-head em'
	sections :results, ResultSection, '.result'

	def search (content)
		keyword.set content
		sleep 3
	end

	def input (content1,content2)
        bookmark.set content1
        sleep 1
        address.set content2
        sleep 1
    end

    def addBookmarks
        add.click
        sleep 1
    end
   
    def makeSure
        sure.click
        sleep 1
    end	

	def result
		number.text.to_i
	end

	def deleteBookmark
		results[0].delete.click
		page.driver.browser.switch_to.alert.accept
		sleep 1
	end	

	def titleText
		results[0].title.text
    end
end