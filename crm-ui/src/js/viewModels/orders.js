/**
 * Copyright (c) 2014, 2017, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/*
 * Your incidents ViewModel code goes here
 */

define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojknockout', 
        'ojs/ojtable', 'ojs/ojpagingcontrol', 'ojs/ojpagingtabledatasource', 
        'ojs/ojarraytabledatasource', 'ojs/ojinputtext', 'ojs/ojinputnumber',
        'ojs/ojslider', 'ojs/ojselectcombobox', 'ojs/ojcheckboxset',
        'ojs/ojdatetimepicker', 'ojs/ojtimezonedata', 'ojs/ojradioset'],
 function(oj, ko, $) {
  
    function IncidentsViewModel() {
      var self = this;
      
     
      self.statusList = ko.observableArray([
          {value: 'new'},
          {value: 'assigned',   control: 'assignedTo'},
          {value: 'delivering', control: 'deliveringBy'},
          {value: 'problematic'},
          {value: 'completed'},
          {value: 'cancelled'}
      ])
      self.statusFilter = ko.observableArray($.map(self.statusList(), function(data){
          return data.value
      }))

      

      self.zoneList = ko.observableArray([
            {value: 'All', label: 'All'},
            {value: 'Monterrey', label: 'Monterrey'},
            {value: 'Guadalajara',  label: 'Guadalajara'},
            {value: 'Saltillo',   label: 'Saltillo'},
            {value: 'Queretaro',    label: 'Queretaro'},
            {value: 'DF',   label: 'DF'}
      ]);
      self.zone = ko.observable()

      self.sellerList = ko.observableArray([
            {value: 'None', label: 'None'},
            {value: 'Vendedor1', label: 'Vendedor1'},
            {value: 'Vendedor2', label: 'Vendedor2'},
            {value: 'Vendedor3', label: 'Vendedor3'},
            {value: 'Vendedor4', label: 'Vendedor4'},
            {value: 'Vendedor5', label: 'Vendedor5'}
      ]);
      self.seller = ko.observable()

      
      
      self.driverList = ko.observableArray([
            {value: 'None', label: 'None'},
            {value: 'Moto1', label: 'Moto1'},
            {value: 'Moto2', label: 'Moto2'},
            {value: 'Moto3', label: 'Moto3'},
            {value: 'Moto4', label: 'Moto4'},
            {value: 'Moto5', label: 'Moto5'}
      ]);
      self.driver = ko.observable()
            
            
      self.dateFilterList = ko.observableArray([
          {value: 'none', text: 'None'},
          {value: 'byDeliver', text: 'By date to deliver'},
          {value: 'byCreated', text: 'By date created'},
          {value: 'byClosed', text: 'By date completed/cancelled'}
      ])
      self.dateFilter = ko.observable(self.dateFilterList()[0].value)  
      self.selectedDate = ko.observable(oj.IntlConverterUtils.dateToLocalIso(new Date(2014, 1, 1)));
      
      self.isStatusFilterSelected = function(option) {
          return $.inArray(option, self.statusFilter()) >= 0
      }
      
      self.isADateFilterSelected = function() {
          return self.dateFilter() !== 'none'
      }
      
      self.caps = function(string) {
          return string.charAt(0).toUpperCase() + string.slice(1);
      }
      
      self.submitFilterForm = function(){
          alert("Exito Quemex")
      }
      
      var deptArray = [
        {OrderId: 01, CustomerName: 'Ana Gonzalez',     LocationId: 'Monterrey', Sale: '$300', Status: 'Completed'},
        {OrderId: 10, CustomerName: 'Karla Padilla',    LocationId: 'Apodaca', Sale: '$500', Status: 'Completed'},
        {OrderId: 20, CustomerName: 'Susana Quilty',    LocationId: 'Escobedo', Sale: '$300', Status: 'Assigned'},
        {OrderId: 30, CustomerName: 'Karen LaFea',      LocationId: 'Juarez', Sale: '$500', Status: 'New'},
        {OrderId: 40, CustomerName: 'Baldomero Torres', LocationId: 'Guadalupe', Sale: '$2000',Status: 'Cancelled'},
        {OrderId: 50, CustomerName: 'Ivan Buenrostro',  LocationId: 'Juarez', Sale: '$300', Status: 'Problematic'},
        {OrderId: 60, CustomerName: 'Tio Kalito',       LocationId: 'Escobedo', Sale: '$300', Status: 'Completed'},
        {OrderId: 01, CustomerName: 'Ana Gonzalez',     LocationId: 'Monterrey', Sale: '$300', Status: 'Completed'},
        {OrderId: 10, CustomerName: 'Karla Padilla',    LocationId: 'Monterrey', Sale: '$500', Status: 'Completed'},
        {OrderId: 20, CustomerName: 'Susana Quilty',    LocationId: 'Escobedo', Sale: '$300', Status: 'Assigned'},
        {OrderId: 30, CustomerName: 'Karen LaFea',      LocationId: 'Guadalupe', Sale: '$500', Status: 'New'},
        {OrderId: 40, CustomerName: 'Baldomero Torres', LocationId: 'Monterrey', Sale: '$2000',Status: 'Cancelled'},
        {OrderId: 50, CustomerName: 'Ivan Buenrostro',  LocationId: 'Escobedo', Sale: '$300', Status: 'Problematic'},
        {OrderId: 60, CustomerName: 'Tio Kalito',       LocationId: 'Monterrey', Sale: '$300', Status: 'Completed'},
        {OrderId: 01, CustomerName: 'Ana Gonzalez',     LocationId: 'Apodaca', Sale: '$300', Status: 'Completed'},
        {OrderId: 10, CustomerName: 'Karla Padilla',    LocationId: 'Monterrey', Sale: '$500', Status: 'Completed'},
        {OrderId: 20, CustomerName: 'Susana Quilty',    LocationId: 'Guadalupe', Sale: '$300', Status: 'Assigned'},
        {OrderId: 30, CustomerName: 'Karen LaFea',      LocationId: 'Escobedo', Sale: '$500', Status: 'New'},
        {OrderId: 40, CustomerName: 'Baldomero Torres', LocationId: 'Guadalupe', Sale: '$2000',Status: 'Cancelled'},
        {OrderId: 50, CustomerName: 'Ivan Buenrostro',  LocationId: 'Monterrey', Sale: '$300', Status: 'Problematic'},
        {OrderId: 60, CustomerName: 'Tio Kalito',       LocationId: 'Apodaca', Sale: '$300', Status: 'Completed'},
        {OrderId: 67, CustomerName: 'Mafer Chaparrita', LocationId: 'Juarez', Sale: '$600', Status: 'New'}];
      
      self.pagingDatasource = new oj.PagingTableDataSource(new oj.ArrayTableDataSource(deptArray, {idAttribute: 'OrderId'}));
      
      
    }
    return new IncidentsViewModel();
  }
);
