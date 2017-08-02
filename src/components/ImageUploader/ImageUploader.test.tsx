import * as React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import {ImageUploader} from "./ImageUploader";

describe('image uploader', () => {

  let imageUploaderWrapper;

  beforeEach(() => {
    imageUploaderWrapper = shallow(<ImageUploader uploadImage={() => {}}/>)
  });

  it('should contain text & image & file input in component', () => {
    expect(imageUploaderWrapper.find('p').text()).to.equal('点击上传图片');
    expect(imageUploaderWrapper.find('img')).to.have.length(1);
    expect(imageUploaderWrapper.find('input').prop('type')).to.equal('file');
  });

});
