class CoversController < ApplicationController
  def index
  end

  def pdf
    respond_to do |format|
      format.html
      format.pdf do
        render pdf: 'test_format',
          layout: 'pdf.html.erb',
          template: 'covers/sample.html.erb',
          page_size: 'A3',
          orientation: 'Landscape',
          encoding: 'UTF-8',
          show_as_html: params[:debug]
      end
    end
  end

end
