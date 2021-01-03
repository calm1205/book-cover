class CoversController < ApplicationController
  def index
  end

  def pdf
    if params[:font] == '0'
      @font = 'sans-serif'
    elsif params[:font] == '1'
      @font = 'serif'
    else
    end

    @main_title        = params[:title]
    @title_vertical    = params[:title_vertical] ? 'upright' : 'sideway'
    back_title         = params[:back_title]
    @back_titles       = back_title.split('')
    @turns             = params[:number_of_turns].to_i
    @title_font_size   = params[:title_font_size].to_i + 2
    @font_color        = params[:font_color]
    @back_ground_color = params[:back_ground_color]
    @border_color      = params[:border_color]
    @width_of_front    = params[:width_of_front].to_f * 47
    @width_of_f_margin = (params[:width_of_front].to_f - 95) / 2
    @width_of_back     = params[:width_of_back].to_f * 47
    @height            = (params[:height].to_f - 156) * 47

    respond_to do |format|
      format.html
      format.pdf do
        # render pdf: 'original_format',
        #   layout: 'pdf.html.erb',
        #   template: 'covers/outline.html.erb',
        #   page_size: 'A3',
        #   orientation: 'Landscape',
        #   encoding: 'UTF-8',
        #   show_as_html: params[:debug]

        pdf = render_to_string pdf: 'original_format',
        layout: 'pdf.html.erb',
        template: 'covers/outline.html.erb',
        page_size: 'A3',
        orientation: 'Landscape',
        encoding: 'UTF-8'

        send_data(pdf)
      end
    end
  end

end