import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", () => {
  test("status from props should be in the state", () => {
    const component = create(<ProfileStatus status="Glory to Ukraine!" />);
    const instance = component.getInstance();
    expect(instance.state.status).toBe("Glory to Ukraine!");
  });

  test("after creation <span> should be dispalayed", () => {
    const component = create(<ProfileStatus status="Glory to Ukraine!" />);
    const root = component.root;
    let span = root.findByType("span");
    expect(span).not.toBeNull();
  });

  test("after creation <input> shouldn't be dispalayed", () => {
    const component = create(<ProfileStatus status="Glory to Ukraine!" />);
    const root = component.root;
    expect(() => {
      let input = root.findByType("input");
    }).toThrow();
  });

  test("after creation <span> sholud contains status ", () => {
    const component = create(<ProfileStatus status="Glory to Ukraine!" />);
    const root = component.root;
    let span = root.findByType("span");
    expect(span.children[0]).toBe("Glory to Ukraine!");
  });

  test("input should be dispalayed in editMode instead of span ", () => {
    const component = create(<ProfileStatus status="Glory to Ukraine!" />);
    const root = component.root;
    let span = root.findByType("span");
    span.props.onClick();
    let input = root.findByType("input");
    expect(input.props.value).toBe("Glory to Ukraine!");
  });

  test("callback should be called ", () => {
    const mockCallback = jest.fn();
    const component = create(<ProfileStatus status="Glory to Ukraine!" updateStatus={mockCallback}/>);
    const instance = component.getInstance();
    instance.deactivateEditMode();
    expect(mockCallback.mock.calls.length).toBe(1);
  });
  
});
