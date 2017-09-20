class Order < ActiveRecord::Base

  def self.allowed_params
      [
        :page_name,
        :page_url,
        :variant,
        :ip,
        :day_week,
        :day_period,
        :quantity,
        :state,
        :customer_name,
        :city,
        :neighborhood,
        :street_name,
        :street_number,
        :phone_number,
        :desktopmobile
      ].map &:to_s
  end 

end
